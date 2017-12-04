var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetsPage = client.page.datasetsPage();
var datasetMetadataPage = client.page.datasetMetadataPage();
var versionMetadataPage = client.page.versionMetadataPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to the datasets page$/, () => {
        return datasetsPage
            .navigate()
            .waitForLoad();
    });
    
    When(/^I select a dataset/, () => {
        return datasetsPage
            .click('@datasetTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });

    Then(/^I can see a dataset's available actions/, () => {
        return datasetsPage
            .assert.visible('@datasetMetadataLink')
            .assert.visible('@datasetVersionLink')
    });


    /*
    Access the 'edit metadata' screen for a dataset
    */
    When(/^I click the 'edit metadata' link/, () => {
        return datasetsPage
            .click('@datasetMetadataLink')
            .assert.urlEquals(datasetMetadataPage.url('466'))
    });
    
    Then(/^I see the dataset metadata page/, () => {
        return datasetMetadataPage
            .waitForLoad();
    });


    /*
    Access the 'edit version metadata' screen for a dataset
    */
    When(/^I click the 'edit version metadata' link/, () => {
        return datasetsPage
            .click('@datasetVersionLink')
            .assert.urlEquals(versionMetadataPage.url('466', 'Time-series', '1'));
    });

    Then(/^I see the version metadata page/, () => {
        return versionMetadataPage
            .waitForLoad();
    });
});
