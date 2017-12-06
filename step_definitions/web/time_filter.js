var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var timeFilterPage = client.page.timeFilterPage();
var filterPage = client.page.filterPage();
var filterOptionsPage = client.page.filterOptionsPage();

defineSupportCode(({Given, Then, When}) => {

    /*
    Reused across scenarios
    */
    Given(/^I go to the 'time' filter page$/, () => {
        return timeFilterPage
            .navigate()
            .waitForLoad();
    });

    When(/^I select the '([^"]*)' option/, dateOption => {
        switch(dateOption) {
            case('latest date'): {
                return timeFilterPage
                    .click('@latestDateOption');
            }
            case('single range'): {
                return timeFilterPage
                    .click('@singleRangeDateOption');
            }
        }
    });
    
    Then(/^I can see that the '([^"]*)' option is checked/, dateOption => {
        switch(dateOption) {
            case('latest date'): {
                return timeFilterPage
                    .dateOptionIsChecked('latestDateOption');
            }
            case('single range'): {
                return timeFilterPage
                    .dateOptionIsChecked('singleRangeDateOption');
            }
        }
    });


    /*
    Add the latest available time to filter job
    */
    When(/^I save my selection(s)/, () => {
        return filterPage
            .saveAndReturn();
    });

    Then(/^I can see I have '([^"]*)' time filter applied/, filterCount => {
        return filterOptionsPage
            .getText('@timeFilterNumberAdded', result => {
                const count = result.value.substr(0, result.value.indexOf(' item'));
                filterOptionsPage.assert.equal(count, filterCount);
            })
    });
    
    Then(/^I cleared the filters I'd applied/, () => {
        return filterOptionsPage
            .click('@clearAllLink');
    })


    /*
    Add a single time to the filter job
    */
    When(/^I select a single month and year/, () => {
        return timeFilterPage
            .click('@singleMonthSelect')
            .waitForElementVisible('@singleMonthSelect', 1000)
            .click(timeFilterPage.elements.singleMonthSelect.selector + ' option[value="June"]')
            .click('@singleYearSelect')
            .waitForElementVisible('@singleYearSelect', 1000)
            .click(timeFilterPage.elements.singleYearSelect.selector + ' option[value="2000"]');
    });

    Then(/^I can see the month and year have been selected/, () => {
        timeFilterPage.expect.element('@singleMonthSelect').to.have.value.that.equals('June')
        return timeFilterPage.expect.element('@singleYearSelect').to.have.value.that.equals('2000');
    });
})