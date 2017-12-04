var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetsPage = client.page.datasetsPage();
var datasetMetadataPage = client.page.datasetMetadataPage();
var versionMetadataPage = client.page.versionMetadataPage();
var instanceMetadataPage = client.page.instanceMetadataPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to the datasets page$/, () => {
        return datasetsPage
            .navigate()
            .waitForLoad();
    });
    
    When(/^I select a dataset with a new version/, () => {
        return datasetsPage
            .click('@datasetWithVersionTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });
    
    When(/^I select a dataset with a new instance/, () => {
        return datasetsPage
            .click('@datasetWithInstanceTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });

    Then(/^I can see a dataset's available actions/, () => {
        return datasetsPage
            .assert.visible('@datasetMetadataLink')
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
    Access the 'edit metadata' screen for a version
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
    
    
    /*
    Access the 'edit metadata' screen for a instance
    */
    When(/^I click the 'edit instance metadata' link/, () => {
        return datasetsPage
            .click('@datasetInstanceLink')
            .assert.urlEquals(instanceMetadataPage.url('95c4669b-3ae9-4ba7-b690-87e890a1c67c', 'f20549a3-485e-4b61-82da-29f2f1064583'));
    });

    Then(/^I see the instance metadata page/, () => {
        return instanceMetadataPage
            .waitForLoad();
    });
});
