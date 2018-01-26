const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var MongoClient = require('mongodb').MongoClient;
var request = require("request-promise");
var waitUntil = require('wait-until');

var mongoURL = process.env.MONGODB_URL;
var datasetAuthToken = "FD0108EA-825D-411C-9B1D-41EF7727F465";
var instance_id = "";
var datasetCollection = mongoURL + "/datasets";
var collections = [
    "contacts",
    "datasets",
    "dimension.options",
    "dimensions",
    "editions",
    "instances",
    "versions"
]

var databases = [
    "codelists",
    "datasets",
    "filters",
    "imports"
]

// creates an import job
const createImport = () => request(
    {
        "method":"POST", 
        "uri": process.env.IMPORT_API_URL + "/jobs",
        "json": true,
        "body": {
            "recipe":"b944be78-f56d-409b-9ebd-ab2b77ffe187"
        }
    }
)

const addFile = (job_id) => request(
    {
        "method": "PUT",
        "uri": process.env.IMPORT_API_URL + "/jobs/" + job_id + "/files",
        "json": true,
        "body": {
            "alias_name": "COICOP",
            "url": "https://s3-eu-west-1.amazonaws.com/dp-frontend-florence-file-uploads/2470609-2470609-EXAMPLE_V4-coicopcomb-inc-geo-code1csvcsv"
        }
    }
)

const submitJob = (job_id) => request(
    {
        "method": "PUT",
        "uri": process.env.IMPORT_API_URL + "/jobs/" + job_id,
        "json": true,
        "body": {
            "state": "submitted"
        }
    }
)

const getInstance = (instanceID) => request(
    {
        "method": "GET",
        "uri": process.env.DATASET_API_URL + "/instances/" + instanceID,
        "json": true,
        "headers": {
            "Internal-Token": datasetAuthToken
        }
    }
).then((resp) => {
    var state = resp.state;
    console.log("got response from dataset api with state: " + state);
    if (state === "completed") {
        console.log("import completed. instance id: " + instanceID);
        instance_id = instanceID;
    } else {
        console.log("import still being submitted: " + state);
    }
})

function queueImport(resolve, reject) {
    return createImport().then((response) => {
        var jobID = response.id;
        var instanceID = response.links.instances[0].id;
        console.log("sucessfully created import job: " + jobID + " instance_id: " + instanceID);

        return addFile(jobID).then(() => {
            console.log("file added to import job");
            return submitJob(jobID).then(() => {
                console.log("job submitted");
                waitUntil().interval(10000).times(10)
                    .condition(function() {
                        getInstance(instanceID);
                        if (instance_id !== "") {
                            return true
                        }
                        return false
                    }).done(function(result) {
                        if (result) {
                            resolve();
                        }
                    })
            })
        })

    }).catch(error => {
        console.log("unable to create import: " + error.message);
        reject("unable to create instance");
    })
}

function teardown() {
    console.log("tearing down test data");

    dropDBs();

    deleteCollection();

    restoreCurrent();

    console.log("teardown complete");
}

function backupCurrent() {
    console.log("backing up current mongo state")

    const spawn = require( 'child_process' ).spawn,
    exec = spawn( 'mongodump', [ '--uri=' + mongoURL, '-o=tempdump'  ] );

    exec.stdout.on( 'data', data => {
    });

    exec.stderr.on( 'data', data => {
    });

    exec.on( 'close', code => {
    });
}

function restoreCurrent() {
    console.log("restoring current mongo state");

    const spawn = require( 'child_process' ).spawn,
    exec = spawn( 'mongorestore', [ '--uri=' + mongoURL, '--dir=' + "tempdump" ] );

    exec.stdout.on( 'data', data => {
    });

    exec.stderr.on( 'data', data => {
    });

    exec.on( 'close', code => {
    });
}

function dropDBs() {
    console.log("dropping databases: " + databases);

    for (var i = 0; i < databases.length; i++) {
        console.log("database: " + databases[i]);

        // make client connect to mongo service
        MongoClient.connect(mongoURL + "/" + databases[i], function(err, db) {
            if (err) throw err;
            console.log("Connected to Database!");
            // print database name
            console.log("db object points to the database : "+ db.databaseName);
            // delete the database
            db.dropDatabase(function(err, result){
                console.log("Error : "+err);
                if (err) throw err;
                console.log("Operation Success ? "+result);
                // after all the operations with db, close it.
                db.close();
            });
        });
    }
}

function useInstanceID() {
    console.log("using instance id: " + instance_id)

    MongoClient.connect(mongoURL + "/datasets", function(err, db) {
        if (err) {
            console.log('Sorry unable to connect to MongoDB Error:', err);
        } else {

            var collection = db.collection('instances');

            collection.updateMany({
                "is_frontend_instance": true
            }, {
                $set: {
                    "id": instance_id
                }
            }, function(err, results) {
            });

            db.close();
        }
    });

    MongoClient.connect(mongoURL + "/filters", function(err, db) {
        if (err) {
            console.log('Sorry unable to connect to MongoDB Error:', err);
        } else {

            var collection = db.collection('filters');

            collection.updateOne({
                "is_frontend_instance": true
            }, {
                $set: {
                    "instance_id": instance_id
                }
            }, function(err, results) {
            });

            db.close();
        }
    });

    MongoClient.connect(mongoURL + "/filters", function(err, db) {
        if (err) {
            console.log('Sorry unable to connect to MongoDB Error:', err);
        } else {

            var collection = db.collection('filterOutputs');

            collection.updateMany({
                "is_frontend_instance": true
            }, {
                $set: {
                    "instance_id": instance_id
                }
            }, function(err, results) {
            });

            db.close();
        }
    });

    MongoClient.connect(mongoURL + "/datasets", function(err, db) {
        if (err) {
            console.log('Sorry unable to connect to MongoDB Error:', err);
        } else {

            var collection = db.collection('dimension.options');

            collection.updateMany({
                "is_frontend_instance": true
            }, {
                $set: {
                    "instance_id": instance_id
                }
            }, function(err, results) {
            });

            db.close();
        }
    });

}

function restoreTestData() {
    console.log("restoring current mongo state");

        const spawn = require( 'child_process' ).spawn,
        exec = spawn( 'mongorestore', [ '--uri=' + mongoURL, '--dir=' + "testdump" ] );

        exec.stdout.on( 'data', data => {
        });

        exec.stderr.on( 'data', data => {
        });

        exec.on( 'close', code => {
        });
}

// Returns access token from Zebedee
const requestAccessToken = () => request(
    {
        "method":"POST", 
        "uri": process.env.FLORENCE_URL + "/zebedee/login",
        "json": true,
        "body": {
            "email":"florence@magicroundabout.ons.gov.uk",
            "password":"one two three four"
        }
    }
)

// Returns collection ID from Zebedee
const createCollection = token => request(
    {
        "method":"POST", 
        "uri": process.env.FLORENCE_URL + "/zebedee/collection",
        "json": true,
        "headers" : {
            "X-Florence-Token":token
        },
        "body": {
            "name":"Acceptance test collection",
            "type":"scheduled",
            "publishDate":"2025-01-26T09:30:00.000Z"
        }
    }
)

function deleteCollection(){
    const getCollections = (token) => request(
        {
            "method":"GET", 
            "uri": process.env.FLORENCE_URL + "/zebedee/collections",
            "json": true,
            "headers" : {
                "X-Florence-Token":token
            }
        }
    )
    const deleteCollection = (collectionIds, token) => request(
        {
            "method":"DELETE", 
            "uri": process.env.FLORENCE_URL + "/zebedee/collection/" + collectionIds,
            "json": true,
            "headers" : {
                "X-Florence-Token":token
            }
        }
    )
    requestAccessToken().then((token) => {
        console.log("Deleting collections");
        return getCollections(token).then((collections) => {
            for (var i = 0; i < collections.length; i++){
                deleteCollection(collections[i].id, token).then((deleted) => {
                    console.log(i + " collections deleted");
                }).catch(error => {
                    console.log("Unable to delete collection. Not empty!");
                });
            } 
        });
    });
}

defineSupportCode(({BeforeAll, AfterAll}) => {
    BeforeAll(() => {
        // TODO only run this datasets setup when we have the correct tags that need that data
       
        return new Promise((res) => {
            function startImport(res) {
                new Promise((resolve, reject) => {
                    queueImport(resolve, reject);
                }).then((message) => {
                    console.log(message);
                    setTimeout(backupCurrent, 1000);
        
                    setTimeout(dropDBs, 1000);
                
                    setTimeout(restoreTestData, 1000);
                
                    if (instance_id.length > 0) {
                        setTimeout(useInstanceID, 3000);
                    }

                    setTimeout(res, 6000);
                }).catch((err) => {
                    console.log(err);
                    process.exit(1);
                })
            }
        
            startImport(res);
        })

        
        
    })
    AfterAll( function() {
        // TODO only run this datasets setup when we have the correct tags that need that data
        teardown();
    })
})

defineSupportCode(({Before, After}) => {
    Before(test => {
        const usesCollection = (
            test.pickle.tags.some(tag => tag.name === "@florence")
            &&
            test.pickle.tags.some(tag => tag.name === "@create_collection")
        )
        if (usesCollection) {
            console.log('Logging into Zebedee to create a collection before test');
            requestAccessToken().then((token) => {
                console.log("Successfully logged in to Zebedee. Access token: " + token);
                return createCollection(token).then((collection) => {
                    console.log("Successfully created a collection. Collection ID: " + collection.id);
                }); 
            }).catch(error => {
                console.log("Collection not created: " + error.message);
            }); 
        }

        const needsLoggingIn = (
            test.pickle.tags.some(tag => tag.name === "@florence")
            &&
            !test.pickle.tags.some(tag => tag.name === "@login")
        )
        if (needsLoggingIn) {
            console.log('Running Florence login before test');
            client.url(client.page.loginPage().url)
                .page.loginPage()
                .waitForLoad()
                .setValue('@emailInput', 'florence@magicroundabout.ons.gov.uk')
                .setValue('@passwordInput', 'one two three four')
                .attemptLogin()

            return client.page.globalNav().waitForLoad()
        }
        return client.url();
            
    });
    After(() => {
        return client.end();
    })
})