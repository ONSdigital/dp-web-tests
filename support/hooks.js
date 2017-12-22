const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var MongoClient = require('mongodb').MongoClient;

var mongoURL = process.env.MONGODB_URL;
var instance_id = process.env.INSTANCE_ID;
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

function setup() {
    setTimeout(backupCurrent, 1000)

    setTimeout(dropDBs, 1000);

    setTimeout(restoreTestData, 1000);

    if (instance_id.length > 0) {
        setTimeout(useInstanceID, 3000);
    }
}

function teardown() {
    console.log("tearing down test data");

    dropDBs();

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

defineSupportCode(({BeforeAll, AfterAll}) => {
    BeforeAll(() => {
        // TODO only run this datasets setup when we have the correct tags that need that data

        return new Promise((resolve) => {
            setup();
            console.log("setting up data");
            setTimeout(resolve, 6000);
        });

    })
    AfterAll( function() {
        // TODO only run this datasets setup when we have the correct tags that need that data
        teardown();
    })
})

defineSupportCode(({Before, After}) => {
    Before(test => {
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
