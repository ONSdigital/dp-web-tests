var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var previewDownloadPage = client.page.previewDownloadPage();

defineSupportCode(({Given, Then, When}) => {

    Then(/^I can see the preview and download page$/, () => {
        return previewDownloadPage
            .waitForLoad();
    })

    Then(/^I can see the correct preview and download contents$/, () => {
        return previewDownloadPage
            .waitForElementVisible('@excelDownload', 5000)
            .waitForElementVisible('@csvDownload', 5000)
            .numberOfTableRows(rowCount => {
                return previewDownloadPage.assert.equal(rowCount, 2);
            });
    })

    Given(/^I go to the preview and download page$/, () => {
        return previewDownloadPage
            .navigate()
            .waitForLoad();
    })

    When(/^I click adjust filter options$/, () => {
        return previewDownloadPage
            .click('@adjustFilterOptions');
    })

    When(/^I click the dataset page link$/, () => {
        return previewDownloadPage
            .click('@datasetPageLink');
    })
})