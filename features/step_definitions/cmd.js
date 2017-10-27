var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var page = client.page.cmdPage();

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open the the dataset landing page with id "([^"]*)"$/, (datasetID) => {
        return page
            .navigate(datasetID);
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
            .click('xpath','//a[contains(@href,"aggregate")]');
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

    When(/I click the first radio button and Save and Return$/, function() {
        return page
            .waitForElementPresent('@addLatestRadio', 20000)
            .click('@addLatestRadio')
            .click('@saveAndReturn');
    })

    Given(/I have created a new filter job for dataset: "([^"]*)"$/, function(datasetID) {
        return page
            .navigate(datasetID)
            .waitForElementPresent('input[value="Filter and Download"]', 20000)
            .click('input[value="Filter and Download"]')
            .waitForElementPresent('body', 20000)
            .assert.containsText('.page-intro__title',"Filter options");
    })

    Then(/the filter options for time contains the latest result$/, function() {
        return page
            .waitForElementPresent('@timeFilterOption', 20000)
            .assert.containsText('@timeFilterOption', '1 item added: June 2015');
    })

    Then(/I click the second radio button$/, function() {
        return page
            .waitForElementPresent('@addSingleRadio', 20000)
            .click('@addSingleRadio')
    })

    Then(/I select "([^"]*)" "([^"]*)" from the drop down and Save and Return$/, function(month, year) {
        return page
            .waitForElementPresent('select[id="month-single"]', 2000)
            .click('select[id="month-single"] option[value="'+month+'"]')
            .waitForElementPresent('select[id="year-single"]', 2000)
            .click('select[id="year-single"] option[value="'+year+'"]')
            .click('@saveAndReturn');
    })

    Then(/the filter options for time contains the result "([^"]*)"$/, function(result) {
        return page
            .waitForElementPresent('@timeFilterOption', 20000)
            .assert.containsText('@timeFilterOption', result);
    })

    Then(/I click the third radio button$/, function() {
        return page
            .waitForElementPresent('@addRangeRadio', 20000)
            .click('@addRangeRadio')
    })

    Then(/I select "([^"]*)" "([^"]*)" to "([^"]*)" "([^"]*)" from the range drop down and Save and Return$/, function(startMonth, startYear, endMonth, endYear) {
        return page
            .waitForElementPresent('select[id="start-month"]', 2000)
            .click('select[id="start-month"] option[value="'+startMonth+'"]')
            .waitForElementPresent('select[id="start-year"]', 2000)
            .click('select[id="start-year"] option[value="'+startYear+'"]')
            .waitForElementPresent('select[id="end-month"]', 2000)
            .click('select[id="end-month"] option[value="'+endMonth+'"]')
            .waitForElementPresent('select[id="end-year"]', 2000)
            .click('select[id="end-year"] option[value="'+endYear+'"]')
            .click('@saveAndReturn');
    })

    Then(/I click the fourth radio button$/, function() {
        return page
            .waitForElementPresent('@addListRadio', 20000)
            .click('@addListRadio')
    })

    Then(/I select "([^"]*)", "([^"]*)" and "([^"]*)" from the list and Save and Return$/, function(month1, month2, month3) {
        return page
            .waitForElementPresent('label[for="id-'+month1+'"]', 2000)
            .click('label[for="id-'+month1+'"]')
            .waitForElementPresent('label[for="id-'+month2+'"]', 2000)
            .click('label[for="id-'+month2+'"]')
            .waitForElementPresent('label[for="id-'+month3+'"]', 2000)
            .click('label[for="id-'+month3+'"]')
            .click('@saveAndReturn');
    })

    Then(/I click the add all button and Save and Return$/, function() {
        return page
            .waitForElementPresent('input[name="add-all"]', 2000)
            .click('input[name="add-all"]')
            .waitForElementPresent('@saveAndReturn', 20000)
            .click('@saveAndReturn');;
    })

    Then(/the the filter options for time contains all results$/, function() {
        return page
            .waitForElementPresent('@timeFilterOption', 20000)
            .expect.element('@timeFilterOption').text.to.match(/234 items added:.+/);
    })

});
