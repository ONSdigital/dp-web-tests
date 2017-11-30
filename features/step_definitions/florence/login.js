var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var loginPage = client.page.loginPage();
var collectionsPage = client.page.collectionsPage();
var teamsPage = client.page.teamsPage();
var globalNav = client.page.globalNav();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    When(/^I log in/, () => {
        return loginPage
        .setValue('@emailInput', 'florence@magicroundabout.ons.gov.uk')
        .setValue('@passwordInput', 'one two three four')
        .attemptLogin(loginPage)
    });

    When(/^I log out/, () => {
        return globalNav
            .logOut();
    });


    /*
    Scenario: Submit correct email and password
    */
    Given(/^I am on the login page/, () => {
        return loginPage
            .navigate()
            .waitForLoad();
    });
    
    Then(/^I should see the collections screen/, () => {
        return collectionsPage.
        waitForLoad()
        .assert.urlEquals(collectionsPage.url);
    });
    

    /*
    Scenario: Redirect on successful login
    */
    Given(/^I go to the teams screen/, () => {
        return teamsPage
            .navigate();
    });
    
    Then(/^I get redirected to the login screen/, () => {
        return loginPage
            .waitForLoad();
    });

    Then(/^I should see the teams screen/, () => {
        return teamsPage.
            waitForLoad()
            .assert.urlEquals(teamsPage.url);
    });

});
