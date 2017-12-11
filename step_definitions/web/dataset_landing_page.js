var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetLandingPage = client.page.datasetLandingPage();

defineSupportCode(({Given, Then, When}) => {

    /*
    Reused across scenarios
    */
    Given(/^I go to a dataset landing page/, () => {
        return datasetLandingPage
            .navigate()
            .waitForLoad();
    });

    When(/^I click the 'filter' call-to-action/, () => {
        return datasetLandingPage
            .click('@filterButton')
    });

});