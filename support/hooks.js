const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var MongoClient = require('mongodb').MongoClient;

var mongoURL = process.env.MONGODB_URL;
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

function setup() {
    console.log("setting up tests")

    const spawn = require( 'child_process' ).spawn,
    exec = spawn( 'mongorestore', [ '--uri=' + mongoURL ] );

    exec.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });

    exec.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });

    exec.on( 'close', code => {
        console.log( `setup complete.` );
    });
}

function teardown() {
    console.log("tearing down test data")
    
    MongoClient.connect(datasetCollection, function(err, db) {
        if (err) throw err;

        for (var i in collections) {
            var query = { acceptance_test : true };

            db.collection(collections[i]).remove(query, function(err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) deleted");
            });
        }

        db.close();
    })
}

defineSupportCode(({BeforeAll, AfterAll}) => {
    BeforeAll(() => {
        // TODO only run this datasets setup when we have the correct tags that need that data 
        setup();
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