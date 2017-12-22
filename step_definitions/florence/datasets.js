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

    Then(/^I can see a dataset's available actions/, () => {
        return datasetsPage
            .assert.visible('@datasetMetadataLink')
    });


    /*
    Access the 'edit metadata' screen for a dataset
    */
    When(/^I select any dataset/, () => {
        return datasetsPage
            .click('@datasetTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });

    When(/^I click the 'edit metadata' link/, () => {
        return datasetsPage
            .click('@datasetMetadataLink')
            .assert.urlEquals(datasetMetadataPage.url('931a8a2a-0dc8-42b6-a884-7b6054ed3b68'))
    });
    
    Then(/^I see the dataset metadata page/, () => {
        return datasetMetadataPage
            .waitForLoad();
    });

    Then(/^I can see the correct metadata on the dataset metadata page/, () => {
        return datasetMetadataPage.
            waitForElementVisible('@datasetID', 1000)
            .getValue('@title', function(result) {
                return datasetMetadataPage.assert.equal(result.value, 'Acceptance test');
            })
            .getValue('@description', function(result) {
                return datasetMetadataPage.assert.equal(result.value, 'This is the acceptance test description.');
            })
            .getValue('@contactName', function(result) {
                return datasetMetadataPage.assert.equal(result.value, 'James Tucker');
            })
            .getValue('@contactEmail', function(result) {
                return datasetMetadataPage.assert.equal(result.value, 'cpi@ons.gsi.gov.uk');
            })
            .getValue('@contactPhone', function(result) {
                return datasetMetadataPage.assert.equal(result.value, '+44 (0)1633 456900');
            });
    })


    /*
    Access the 'edit metadata' screen for a version
    */
    When(/^I select a dataset with a new version/, () => {
        return datasetsPage
            .click('@datasetTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });

    When(/^I click the 'edit version metadata' link/, () => {
        return datasetsPage
            .click('@datasetVersionLink')
            .assert.urlEquals(versionMetadataPage.url('931a8a2a-0dc8-42b6-a884-7b6054ed3b68', 'Time-series', '2'));
    });

    Then(/^I see the version metadata page/, () => {
        return versionMetadataPage
            .waitForLoad();
    });
    
    
    /*
    Access the 'edit metadata' screen for a instance
    */
    When(/^I select a dataset with a new instance/, () => {
        return datasetsPage
            .click('@datasetTitle')
            .waitForElementVisible('@datasetDetails', 1000)
    });

    When(/^I click the 'edit instance metadata' link/, () => {
        return datasetsPage
            .click('@datasetInstanceLink')
            .assert.urlEquals(instanceMetadataPage.url('931a8a2a-0dc8-42b6-a884-7b6054ed3b68', '65b08a7d-85be-44e1-9743-df913217b782'));
    });

    Then(/^I see the instance metadata page/, () => {
        return instanceMetadataPage
            .waitForLoad();
    });

    When(/^I select upload a dataset/, () => {
        return datasetsPage
            .click('@datasetUploadLink')
            .api.pause(1000);
    });
});
