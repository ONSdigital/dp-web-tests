# dp-web-tests

Automated tests for dp websites using nightwatch.js, with the cucumber framework

### Installing components

To install the dependencies for this project, simply clone this repository, cd into
it, and run:

- `npm install`

Once you have done this, assuming you have Google Chrome installed, and your dp
environment set up locally, you should be able to run:

- `npm run start:chrome`

to run the tests.

If you wish to run the tests using safari, you will need to download safari driver
extension for selenium from [here](http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz).
You then must open safari, choose File->Open File... and select the downloaded
driver. Finally, using the Develop tab for safari, select Allow Remote Automation.
The develop tab can be accessed by going to safari properties, clicking on
Advanced, and then selecting Show Develop menu in menu bar. To run tests in safari,
simply run:

`npm run start:safari`

To run tests in firefox, ensure you have the latest version downloaded (55+), and 
run:

`npm run start:firefox`

To run all browsers in parallel, run:

`npm run start:parallel-all-browser`
