var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetMetadataPage = client.page.datasetMetadataPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to a dataset metadata page$/, () => {
        return datasetMetadataPage
            .navigate()
            .waitForLoad();
    });

    Then(/^I save the page$/, () => {
        return datasetMetadataPage
            .savePage();
    });

    Then(/^I add the title "([^"]*)"$/, (title) => {
        return datasetMetadataPage
            .waitForElementVisible('@relatedTitle', 1000)
            .clearValue('@relatedTitle')
            .setValue('@relatedTitle', title);
    });

    Then(/^I add the url "([^"]*)"$/, (url) => {
        return datasetMetadataPage
            .clearValue('@relatedURL')
            .setValue('@relatedURL', url);
    });

    When(/^I click "Add"$/, () => {
        return datasetMetadataPage
            .click('@addBtn');
    });
    /*
    View the dataset metadata page
    */
    Then(/^I can see the title for the dataset is "([^"]*)"/, (title) => {        
        return datasetMetadataPage
            .assert.value('@title', title);
    });

    /*
    Edit the dataset description for the dataset
    */
    Then(/^I can see the metadata description for the dataset is "([^"]*)"$/, (description) => {
        return datasetMetadataPage
            .assert.value('@description', description);
    });

    When(/^I edit the description field to "([^"]*)"$/, (newDescription) => {
        return datasetMetadataPage
            .clearValue('@description')
            .setValue('@description', newDescription);
    });

    Then(/^I see the description has been updated to "([^"]*)"$/, (newDescription) => {
        return datasetMetadataPage
            .assert.value('@description', newDescription);
    });

    /*
    Add keywords to the dataset
    */
    Then(/^I can see the keywords field is empty$/, () => {
        return datasetMetadataPage
            .assert.value('@keywordsInput', '');
    });

    When(/^I add the keywords "([^"]*)"$/, (keywords) => {
        return datasetMetadataPage
            .clearValue('@keywordsInput')
            .setValue('@keywordsInput', keywords);
    });

    Then(/^I see the new keywords are displayed as "([^"]*)"$/, (keywords) => {
        return datasetMetadataPage
            .assert.value('@keywordsInput', keywords);
    });

    /*
    Confirm the dataset is a national statistic
    */
    Then(/^I can see the national statistic checkbox is checked$/, () => {
        return datasetMetadataPage
            .verify.attributeEquals('@nationalStatCheck', 'checked', 'true');
    });

    /*
    Add a release frequency for the dataset
    */
    Then(/^I can see the release frequency selector shows "Select an option"$/, () => {
        return datasetMetadataPage
            .assert.value('@releaseFreqSelect', "");
    });

    When(/^I change the value to be "weekly"$/, () => {
        return datasetMetadataPage
            .click('@releaseFreqSelectNext');
    });

    Then(/^I see the selected option is "([^"]*)"$/, (selected) => {
        return datasetMetadataPage
            .assert.value('@releaseFreqSelect', selected);
    });

    /*
    Confirm contact details are correct
    */
    Then(/^I can see the contact name is "([^"]*)"$/, (val) => {
        return datasetMetadataPage
            .assert.value('@contactName', val);
    });

    Then(/^I can see the contact email is "([^"]*)"$/, (val) => {
        return datasetMetadataPage
            .assert.value('@contactEmail', val);
    });

    Then(/^I can see the contact telephone is "([^"]*)"$/, (val) => {
        return datasetMetadataPage
            .assert.value('@contactPhone', val);
    });

    /*
    Add a related dataset to the dataset
    */
    Then(/^I click to add a related dataset$/, () => {
        return datasetMetadataPage
            .click('@relatedDatasetsBtn');
    });

    Then(/^I can see the related dataset has been added$/, () => {
        return datasetMetadataPage
            .expect.element('@relatedDatasetsCardList').text.to.equal('Test');
    });

    /*
    Edit the QMI link for the dataset
    */
    Then(/^I can see the related qmi url input field is "([^"]*)"$/, (url) => {
        return datasetMetadataPage
            .assert.value('@relatedQMIInput', url);
    });

    When(/^I edit the related qmi url input field to "([^"]*)"$/, (newURL) => {
        return datasetMetadataPage
            .clearValue('@relatedQMIInput')
            .setValue('@relatedQMIInput', newURL);
    });

    Then(/^I see the related qmi url input has been updated to "([^"]*)"$/, (newURL) => {
        return datasetMetadataPage
            .assert.value('@relatedQMIInput', newURL);
    });

    /*
    Edit an existing related dataset
    */
    Then(/^I click to edit a related dataset$/, () => {
        return datasetMetadataPage
            .click('@editBtn');
    });

    Then(/^I can see the related dataset has been updated$/, () => {
        return datasetMetadataPage
            .expect.element('@relatedDatasetsCardList').text.to.equal('Test');
    });

    /*
    Delete an existing related dataset
    */
    Then(/^I click to delete a related dataset$/, () => {
        return datasetMetadataPage
            .click('@deleteBtn');
    });

    Then(/^I can see the related dataset has been deleted$/, () => {
        return datasetMetadataPage
            .assert.elementNotPresent('@relatedDatasetsCardList');
    });
})