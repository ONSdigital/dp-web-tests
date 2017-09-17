var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var page = client.page.cmdPage();

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the ONS homepage$/, () => {
        return page
            .navigate()
            .waitForElementPresent('@body', 20000);
    });

    Then(/^the homepage title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.title(title);
    });

    Then(/^the search form exists$/, () => {
        return page.waitForElementPresent('@globalSearch', 20000)
    });

    When(/^I type "([^"]*)" into the search box$/, (term) => {
        return page.setValue('@globalSearch', term);
    });

    Then(/^I click submit$/, () => {
        return page
            .click('@globalSearchSubmit');
    });

    Then(/^the search page title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.title(title);
    });

    When(/^I choose the second search option$/, () => {
        return page
            .click('@CMDDatasetLink');
    });

    Then(/^the dataset page title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.title(title);
    });

    Then(/^I click to "([^"]*)"$/, (action) => {
        return page
            .click('input[value="'+action+'"]');
    });

    Then(/^the filter options title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.title(title);
    });

    Then(/^I click the "([^"]*)" dimension link$/, (link) => {
        return page
            .click('xpath','//a[contains(@href,"goods-and-services")]');
    });

    Then(/^the dimension title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.containsText('@pageHeader',title);
    });

    Then(/^I click the first checkbox$/, () => {
        return page
            .waitForElementPresent('@checkboxLabel', 20000)
            .click('@checkboxLabel');
    });

    Then(/^the selection updates with the selected element$/, function () {
        return page.waitForElementPresent('@filterList', 20000);
        return page.verifySelection();
    });

    Then(/^the selection count increases$/, function () {
        return page.verifyAmount(client);
    });

    When(/^I click remove item$/, function () {
        return page.click('@remove');
    });

    Then(/^the item is removed from the selection$/, function () {
        client.pause(2000);
        return page.assert.elementNotPresent('@filterSelection');
    });

    Then(/^the selection count is updated$/, function () {
        return page.verifyAmount(client);
    });

    When(/^I click add all$/, function () {
      return page.click('@addAll');
    });

    Then(/^the filter selection contains all items$/, function () {
        return page.verifyAmount(client);
    });

    When(/^I click the "([^"]*)" button$/, (button) => {
        return page
            .click('xpath','//input[contains(@name,"save-and-return")]');
    });

    Then(/^I click the "([^"]*)" type dimension link$/, (link) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .click('xpath','//a[contains(@href,"time")]');
    });

    Then(/^the dimension type title is "([^"]*)"$/, (title) => {
        client.pause(2000);
        return page
            .waitForElementPresent('@body', 20000)
            .assert.containsText('@pageHeader',title);
    });

    When(/^I click the "Add Range" link$/, () => {
        return page
            .click('@addRange');
    });

    Then(/^the filter selection contains one item$/, function () {
        client.pause(2000);
        return page.verifyAmount(client);
    });

});
