var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var page = client.page.florencePage();

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the florence login page$/, () => {
        return page
            .navigate()
            .waitForElementPresent('@body', 20000);
    });

    Then(/^I enter the email: "([^"]*)"$/, (emailAddr) => {
        return page
            .waitForElementPresent('@emailInput', 20000)
            .setValue('@emailInput', emailAddr);
    });

    Then(/^I enter the password: "([^"]*)"$/, (password) => {
        return page
            .waitForElementPresent('@passwordInput', 20000)
            .setValue('@passwordInput', password);
    });

    When(/^I click the login button$/, () => {
        return page
            .waitForElementPresent('@loginButton', 20000)
            .click('@loginButton');
    });

    Then(/^I should be on the florence homepage$/, () => {
        return page
            .waitForElementPresent('@homepageTitle', 20000)
            .assert.containsText('@homepageTitle', 'Select a collection');
    });

    Then(/^I logout$/, () => {
        return page
            .waitForElementPresent('@logoutButton', 20000)
            .click('@logoutButton');
    });

    When(/^I click on datasets$/, () => {
        return page
            .waitForElementPresent('@datasetsButton', 20000)
            .click('@datasetsButton');
    });

    Then(/^a selectable table exists with expected fields$/, () => {
        return page
            .waitForElementPresent('@selectableTable', 20000)
            .waitForElementPresent('@selectableDetailsSummary', 20000)
            .waitForElementPresent('@selectableDetails', 20000);
    });

    Then(/^the table should contain a row titled "([^"]*)"$/, (title) => {
        return page
            .waitForElementPresent('@rowTitle', 20000)
            .assert.containsText('@rowTitle', title);
    });

    When(/^I click on the row$/, () => {
        return page
            .click('@rowTitle');
    });

    Then(/^the row is expanded$/, () => {
        return page
            .waitForElementPresent('@selectableDetails', 20000)
            .assert.attributeEquals('@selectableDetails', 'open', 'true');
    });

    When(/^I click on the Edit dataset details button$/, () => {
        return page
            .waitForElementPresent('@editDetailsButton', 20000)
            .click('@editDetailsButton');
    });

    Then(/^I see the "([^"]*)" page$/, (pageTitle) => {
        return page
            .waitForElementPresent('@pageTitle', 20000)
            .assert.containsText('@pageTitle', pageTitle);
    });

    Then(/^I logout from new florence$/, () => {
        return page
            .waitForElementPresent('@logoutButtonNew', 20000)
            .click('@logoutButtonNew');
    });

    When(/^I click on the view link$/, () => {
        return page
        .waitForElementPresent('@viewLink', 20000)
        .click('@viewLink');
    });

    Then(/^I see the metadata page$/, () => {
        return page
        .waitForElementPresent('@pageTitle', 20000)
        .assert.containsText('@pageTitle', 'New data');
    });

    Then(/^the dataset has the title "([^"]*)"$/, (title) => {
        return page
        .waitForElementPresent('@datasetTitle', 20000)
        .assert.containsText('@datasetTitle', title);
    });

    When(/^I click the save button$/, () => {
        return page
        .waitForElementPresent('@saveButton', 20000)
        .click('@saveButton');
    });

    Then(/^I confirm I am viewing a "([^"]*)"$/, (version) => {
        return page
        .waitForElementPresent('@body', 20000)
        .assert.urlContains(version);
    });

});
