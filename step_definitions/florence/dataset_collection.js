var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var addDatasetToCollectionPage = client.page.addDatasetToCollectionPage();
var datasetID = datasetID || '931a8a2a-0dc8-42b6-a884-7b6054ed3b68';
var edition = edition || 'Time-series';
var version = version || '2' ;

defineSupportCode(({Given, Then, When}) => {
    /*
    Add a dataset to a collection
    */
    Given(/I go to the dataset '([^"]*)' page/, (title) => {
        return addDatasetToCollectionPage
            .navigate(process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/metadata/collection")     
            .waitForLoad()
            .expect.element('h1').text.to.equal(title);
    });

    /*
    Add a version to a collection
    */
    Given(/I go to the version '([^"]*)' page/, (title) => {
        return addDatasetToCollectionPage
            .navigate(process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version + "/collection")
            .waitForLoad()
            .expect.element('h1').text.to.equal(title);
    });

    /*
    Steps below are reused
    */
    When(/^I click on the select the edition dropdown/, () => {
        return addDatasetToCollectionPage
            .click('@collectionDropdown')
            .waitForElementVisible('@collectionList', 1000);
    });

    Then(/^I see a list of available collections/, () => {
        return addDatasetToCollectionPage
            .assert.elementPresent('@collection');
    });

    When(/^I select a collection/, () => {
        return addDatasetToCollectionPage
            .click('@collection');
    });

    Then(/^I see the correct release date and time for the collection/, () => {
        return addDatasetToCollectionPage
            .waitForElementVisible('@releaseDate', 1000)
            .expect.element('@releaseDate').text.to.equal('Sunday, January 26th, 2025');
        return addDatasetToCollectionPage
            .expect.element('@releaseTime').text.to.equal('09:30:00');
    });

    When(/^I click 'Save and continue'/, () => {
        return addDatasetToCollectionPage
            .click('@saveAndContinueButton');
    });

    Then(/^I have successfully added the dataset to a collection/, () => {
        return addDatasetToCollectionPage
            .waitForElementVisible('@successHeading', 2000)
            .expect.element('@heading').text.to.equal('Success');
    });

    /*
    Error displayed if no collection is selected
    */
    Then(/^I am shown the error '([^"]*)'/, (error) => {
        return addDatasetToCollectionPage
            .waitForElementVisible('@errorMessage', 1000)
            .expect.element('@errorMessage').text.to.equal(error);
    });

});
