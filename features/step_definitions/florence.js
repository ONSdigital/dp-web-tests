var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var page = client.page.florencePage();

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the florence login page$/, () => {
        return page
            .navigate()
            .waitForElementPresent('@body', 20000);
    });
});