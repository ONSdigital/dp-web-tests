var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var home = client.page.homepage();

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the ONS homepage$/, () => {
        return home
            .navigate()
            .waitForElementPresent('@body', 20000);
    });

    Then(/^the title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return home
            .waitForElementPresent('@body', 20000)
            .assert.title(title);
    });

    Then(/^the search form exists$/, () => {
        return home.waitForElementPresent('@globalSearch', 20000)
    });

    When(/^I type "([^"]*)" into the search box$/, (term) => {
        return home.setValue('@globalSearch', term);
    });

    Then(/^I click submit$/, () => {
        return home
            .click('@globalSearchSubmit');
    });

    When(/^I choose the second search option$/, () => {
        return home
            .click('@CMDDatasetLink');
    });

    Then(/^I click to "([^"]*)"$/, (action) => {
        client.pause(1000);
        return home
            .click('input[value="'+action+'"]');
    });
});