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
            .waitForElementPresent('@body', 20000)
            .assert.containsText('h1', 'Select a collection');
    });
});