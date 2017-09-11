var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the ONS homepage$/, () => {
        return client
            .url('http://localhost:20000')
            .waitForElementPresent('body', 20000);
    });

    Then(/^the title is "([^"]*)"$/, (title) => {
        return client
            .waitForElementPresent('body', 20000)
            .assert.title(title);
    });

    Then(/^the search form exists$/, () => {
        return client
        .waitForElementPresent('input[name="q"]', 20000)
    });
});