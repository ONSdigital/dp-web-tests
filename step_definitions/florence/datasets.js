var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetsPage = client.page.datasetsPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to the datasets page$/, () => {
        return datasetsPage
            .navigate()
            .waitForLoad();
    });
    
});
