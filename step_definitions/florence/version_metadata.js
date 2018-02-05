var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var versionMetadataPage = client.page.versionMetadataPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to a version's metadata page$/, () => {
        return versionMetadataPage
            .navigate()
            .waitForLoad();
    });

    When(/^I change the release date/, () => {
        return versionMetadataPage
            .setValue('@releaseDateInput', '25/12/2017');
    });

    Then(/^I save the version's metadata/, () => {
        return versionMetadataPage
            .savePage();
    });

    When(/^I refresh the page/, () => {
        return versionMetadataPage
            .navigate()
            .waitForLoad();
    });

    Then(/^I see the new release date/, () => {        
        return versionMetadataPage
            .assert.value('@releaseDateInput', '2017-12-25');
    });

    When(/^I add "([^"]*)" as the geography dimension description$/, (description) => {
        return versionMetadataPage
            .setValue('@geographyInput', description);
    })

    Then(/^I see the geography dimension is saved as "([^"]*)"$/, (description) => {
        return versionMetadataPage
            .assert.value('@geographyInput', description);
    })

    Then(/I should be able to see the add to collection button$/, () => {
        return versionMetadataPage
            .waitForElementVisible('@saveAndAdd', 2000);
    })

    When(/I click on the add to collection button/, () => {
        return versionMetadataPage
            .click('@saveAndAdd');
    })

    Then(/I select the first collection/, () => {
        return versionMetadataPage
            .setValue('@collection', "Acceptance test collection")
            .click('@saveAndContinue');
    })

    Then(/I should have successfully added the dataset to a collection/, () => {
        return versionMetadataPage
            .waitForElementVisible('@successHeading', 5000);
    })

})