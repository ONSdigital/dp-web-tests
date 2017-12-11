var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');
var http = require('http');

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


    /*
    Download a metadata file
    */
    When(/^I click the 'other download options' call-to-action/, () => {
        return datasetLandingPage
            .click('@downloadOptionsButton');
    });

    Then(/^I can see the metadata file download/, () => {
        return datasetLandingPage
            .waitForElementVisible('@metadataFile', 2000)
            .assert.attributeEquals('@metadataFile', 'href', datasetLandingPage.url() + '/metadata.txt');
    });


    /*
    Release date is formatted correctly
    */
    Then(/^I can see the release date is formatted/, () => {
        return datasetLandingPage
            .expect.element('@releaseDate').text.to.equal('14 December 2017');
    });

});