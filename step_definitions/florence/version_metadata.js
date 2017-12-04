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

})