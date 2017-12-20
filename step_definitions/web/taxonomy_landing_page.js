var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var taxonomyLandingPage = client.page.taxonomyLandingPage();

defineSupportCode(({Given, Then, When}) => {
    Then(/^I am navigated to the taxonomy landing page$/, () => {
        return taxonomyLandingPage
            .waitForLoad()
            .assert.urlContains(taxonomyLandingPage.url());
    })
})