# dp-web-tests

Automated tests for dp websites using nightwatch.js, with the cucumber framework

### Configuration

You must set the environment variable `ROUTER_URL` to point at your dp-frontend-router
service, `MONGODB_URL` to point at your mongodb instance and `FLORENCE_URL` to point at florence.

### Installing components

To install the dependencies for this project, simply clone this repository, cd into
it, and run:

- `./run.sh -i` 

Once you have done this, assuming you have Google Chrome installed, and your dp
environment set up locally, you should be able to run:

- `./run.sh` (this will run website and florence acceptance tests)

to run the tests.

If you wish to run the tests using safari, you will need to download safari driver
extension for selenium from [here](http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz).
You then must open safari, choose File->Open File... and select the downloaded
driver. Finally, using the Develop tab for safari, select Allow Remote Automation.
The develop tab can be accessed by going to safari properties, clicking on
Advanced, and then selecting Show Develop menu in menu bar. To run tests in safari,
simply run:

`./run.sh -s`

To run tests in firefox, ensure you have the latest version downloaded (55+), and 
run:

`./run.sh -f`