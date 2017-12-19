var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var datasetEditionsPage = client.page.datasetEditionsPage();
var datasetLandingPage = client.page.datasetLandingPage();

defineSupportCode(({Given, Then, When}) => {
    let editionTitle;

    /*
    Reused across scenarios
    */
    Given(/^I am on a dataset editions page/, () => {
        return datasetEditionsPage
            .navigate()
            .waitForLoad();
    });

    When(/^I click an edition/, () => {
        datasetEditionsPage.getText('@editionLink', result => {
            editionTitle = result.value;
        });
        return datasetEditionsPage
            .click('@editionLink');
    });

    Then(/^I can see that I've navigated to that edition's page/, () => {
        return datasetLandingPage
            .waitForLoad()
            .assert.urlContains(datasetEditionsPage.url() + "/editions/" + editionTitle);
    });

    Then(/^I am navigated to the dataset landing page$/, () => {
        return datasetLandingPage
            .waitForLoad();
    })

});
