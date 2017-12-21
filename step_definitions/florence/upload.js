var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var uploadPage = client.page.uploadADatasetPage();
var uploadFilePage = client.page.uploadAFilePage();
var datasetUploadDetailsPage = client.page.datasetUploadDetailsPage();
var completedPage = client.page.uploadCompletedPage();

defineSupportCode(({Given, Then, When}) => {
    Given(/I go to the upload a dataset page/, () => {
        uploadPage
            .navigate()
            .waitForLoad();
    })

    Then(/^I am navigated to the upload a dataset page/, () => {
        uploadPage
            .waitForLoad()
            .assert.urlContains(uploadPage.url);
    });

    When(/^I select to upload a new CPI COICOP version/, () => {
        uploadPage
            .click("@uploadCPI");
    })

    Then(/^I am navigated to the upload a new file page/, () => {
        uploadFilePage
            .waitForLoad()
            .assert.urlContains("/florence/uploads/data/");
    })

    When(/^I select to upload a CPI COICOP file/, () => {
        uploadFilePage
            .waitForElementVisible('@fileInput', 5000)
            .setValue('@fileInput', require('path').resolve(__dirname + '//../../testdata/cpicoicoptest.csv'));
    })

    Then(/^I am shown a link to the file once it is uploaded/, () => {
        uploadFilePage
            .waitForElementVisible('@fileLink', 40000);
    })

    When(/^I select Save and continue on the file upload page/, () => {
        uploadFilePage
            .click("@saveAndContinue");
    })

    Then(/I am navigated to the Dataset upload details page/, () => {
        datasetUploadDetailsPage
            .waitForLoad();
    })

    When(/I select the time series edition/, () => {
        datasetUploadDetailsPage
            .waitForElementVisible("@editionSelector", 2000)
            .setValue("@editionSelector", "time-series");
    })

    Then(/I click submit for publishing/, () => {
        datasetUploadDetailsPage
            .click("@submit");
    })

    Then(/my CPI COICOP import is completed/, () => {
        completedPage
            .waitForElementVisible('@dimensionList', 60000)
            .numberOfVisibleDimensions('ul[class="list"] li[class="list__item"]', result => {
                return uploadFilePage.assert.equal(result, 3);
            });
    })
})