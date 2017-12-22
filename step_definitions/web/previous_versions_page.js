var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');
var http = require('http');

var previousVersionsPage = client.page.previousVersionsPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to the previous versions page/, () => {
        return previousVersionsPage
            .navigate()
            .waitForLoad();
    });

    /*
    Return to the latest version
    */
    When(/^I click the latest version link/, () => {
        return previousVersionsPage
            .click('@latestVersionLink')
    });

    Then(/^I can see the latest version page/, () => {
        return previousVersionsPage
            .waitForLoad()
            .expect.element('@heading').text.to.equal("Acceptance test");
    });

    /*
    Learn more about statistical revisions
    */
    When(/^I click the learn more link/, () => {
        return previousVersionsPage
            .click('@learnMore');
    });

    Then(/^I can see the information about revisions/, () => {
        return previousVersionsPage
            .waitForElementVisible('@revisionsDescription', 1000)
            .getAttribute('@revisionsDescription', 'aria-hidden', function(status) {
                this.assert.equal(status.value, 'false');
            });
    });

    /*
    Revision date is formatted correctly
    */
    Then(/^I can see the revision date is formatted/, () => {
        return previousVersionsPage
            .expect.element('@revisionDate').text.to.equal('14 December 2017');
    });

    /*
    Revision reason conatains information
    */
    Then(/^I can see the revision reason is displayed/, () => {
        return previousVersionsPage
            .expect.element('@revisionReason').text.to.equal('-');
    });

    /*
    Download a version in available formats
    */
    Then(/^I can see the csv file to download/, () => {
        return previousVersionsPage
            .assert.attributeEquals('@csvFile', 'href', process.env.ROUTER_URL + '/download.csv');
    });

    Then(/^I can see the xls file to download/, () => {
        return previousVersionsPage
            .assert.attributeEquals('@xlsFile', 'href', process.env.ROUTER_URL + '/download.xls');
    });

    /*
    Start a filter journey for previous version
    */
    When(/^I click the filter and download button/, () => {
        return previousVersionsPage
            .click('@filterButton')
    });

    Then(/^I see the filter options page/, () => {
        return previousVersionsPage
            .waitForElementVisible('h1', 2000)
            .expect.element('h1').text.to.equal('Filter options');
    });

});