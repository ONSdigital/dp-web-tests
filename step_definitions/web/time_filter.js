var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var timeFilterPage = client.page.timeFilterPage();
var filterPage = client.page.filterPage();
var filterOptionsPage = client.page.filterOptionsPage();

defineSupportCode(({Given, Then, When}) => {
    var numberOfAvailableTimes;

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
            case('single time'): {
                return timeFilterPage
                    .click('@singleDateOption');
            }
            case('range'): {
                return timeFilterPage
                    .click('@rangeDateOption');
            }
            case('list'): {
                return timeFilterPage
                    .click('@listDateOption');
            }
        }
    });
    
    Then(/^I can see that the '([^"]*)' option is checked/, dateOption => {
        switch(dateOption) {
            case('latest date'): {
                return timeFilterPage
                    .dateOptionIsChecked('latestDateOption');
            }
            case('single time'): {
                return timeFilterPage
                    .dateOptionIsChecked('singleDateOption');
            }
            case('range'): {
                return timeFilterPage
                    .dateOptionIsChecked('rangeDateOption');
            }
            case('list'): {
                return timeFilterPage
                    .dateOptionIsChecked('listDateOption');
            }
        }
    });

    When(/^I save my selection(s)/, () => {
        return filterPage
            .saveAndReturn();
    });

    Then(/^I can see I have '([^"]*)' time filter\(s\) applied/, filterCount => {
        return filterOptionsPage
            .getText('@timeFilterNumberAdded', result => {
                const count = result.value.substr(0, result.value.indexOf(' item'));

                if (filterCount === "all") {
                    filterOptionsPage.assert.equal(count, numberOfAvailableTimes, 'All filters are applied');
                    return;
                }
                filterOptionsPage.assert.equal(count, filterCount);
            })
    });
    
    Then(/^I clear the filters I applied/, () => {
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


    /*
    Add a time range to the filter job
    */
    When(/^I select a date range/, () => {
        return timeFilterPage
            .click('@rangeStartMonthSelect')
            .waitForElementVisible('@rangeStartMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeStartMonthSelect.selector + ' option[value="June"]')
            .click('@rangeStartYearSelect')
            .waitForElementVisible('@rangeStartYearSelect', 1000)
            .click(timeFilterPage.elements.rangeStartYearSelect.selector + ' option[value="2000"]')
            .click('@rangeEndMonthSelect')
            .waitForElementVisible('@rangeEndMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeEndMonthSelect.selector + ' option[value="July"]')
            .click('@rangeEndYearSelect')
            .waitForElementVisible('@rangeEndYearSelect', 1000)
            .click(timeFilterPage.elements.rangeEndYearSelect.selector + ' option[value="2001"]');
    });

    Then(/^I can see the date range has been selected/, () => {
        timeFilterPage.expect.element('@rangeStartMonthSelect').to.have.value.that.equals('June')
        timeFilterPage.expect.element('@rangeStartYearSelect').to.have.value.that.equals('2000');
        timeFilterPage.expect.element('@rangeEndMonthSelect').to.have.value.that.equals('July')
        return timeFilterPage.expect.element('@rangeEndYearSelect').to.have.value.that.equals('2001');
    });


    /*
    Add a list of times to the filter job
    */
    When(/^I select dates from the list/, () => {
        // Selenium has issues clicking a checkbox, but clicking the related label works
        // for info https://github.com/nightwatchjs/nightwatch/issues/362
        return timeFilterPage
            .click('#id-June-2015 ~ .checkbox__label')
            .click('#id-January-2000 ~ .checkbox__label')
            .click('#id-October-2009 ~ .checkbox__label')
            .click('#id-April-1999 ~ .checkbox__label');
    });

    Then(/^I can see the dates have been selected/, () => {
        timeFilterPage.listDateOptionIsChecked("#id-June-2015")
        timeFilterPage.listDateOptionIsChecked("#id-January-2000")
        timeFilterPage.listDateOptionIsChecked("#id-October-2009")
        return timeFilterPage.listDateOptionIsChecked("#id-April-1999");
    });


    /*
    Add all of the available times
    */
    When(/^I click the 'add all' link/, () => {
        return timeFilterPage
            .click('@addAllLink');
    });

    Then(/^I can see all available times have been selected/, () => {
        timeFilterPage.numberOfAvailableTimes(count => {
            numberOfAvailableTimes = count;
        });
        return timeFilterPage
            .allListDateOptionsAreChecked();
    });

    /*
    Error is displayed for invalid single time selection
    */

    Then(/^I see an error to '([^"]*)'/, (message) => {
        if (message === "Select a month and year") {
            return timeFilterPage
                .waitForElementVisible('@singleMonthError', 1000)
                .expect.element('@singleMonthError').text.to.equal(message);
        }
        if (message === "Select a range") {
            return timeFilterPage
                .waitForElementVisible('@rangeError', 1000)
                .expect.element('@rangeError').text.to.equal(message);
        }
    })

    When(/^I only select a 'month'/, () => {
        return timeFilterPage
            .click('@singleMonthSelect')
            .waitForElementVisible('@singleMonthSelect', 1000)
            .click(timeFilterPage.elements.singleMonthSelect.selector + ' option[value="June"]')

    })

    When(/^I only select a 'year'/, () => {
        return timeFilterPage
            .click('@singleMonthSelect')
            .waitForElementVisible('@singleMonthSelect', 1000)
            .click(timeFilterPage.elements.singleMonthSelect.selector + ' option[value="Select"]')
            .click('@singleYearSelect')
            .waitForElementVisible('@singleYearSelect', 1000)
            .click(timeFilterPage.elements.singleYearSelect.selector + ' option[value="1999"]')
    })

    When(/^I only select a 'start month'/, () => {
        return timeFilterPage
            .click('@rangeStartMonthSelect')
            .waitForElementVisible('@rangeStartMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeStartMonthSelect.selector + ' option[value="January"]')
            .click('@rangeStartYearSelect')
            .waitForElementVisible('@rangeStartYearSelect', 1000)
            .click(timeFilterPage.elements.rangeStartYearSelect.selector + ' option[value="Select"]')
    })

    When(/^I only select a 'start year'/, () => {
        return timeFilterPage
            .click('@rangeStartMonthSelect')
            .waitForElementVisible('@rangeStartMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeStartMonthSelect.selector + ' option[value="Select"]')
            .click('@rangeStartYearSelect')
            .waitForElementVisible('@rangeStartYearSelect', 1000)
            .click(timeFilterPage.elements.rangeStartYearSelect.selector + ' option[value="1999"]')
    })

    When(/^I select an 'end month' earlier than the 'start month'/, () => {
        return timeFilterPage
            .click('@rangeStartMonthSelect')
            .waitForElementVisible('@rangeStartMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeStartMonthSelect.selector + ' option[value="June"]')
            .click('@rangeStartYearSelect')
            .waitForElementVisible('@rangeStartYearSelect', 1000)
            .click(timeFilterPage.elements.rangeStartYearSelect.selector + ' option[value="2005"]')
            .click('@rangeEndMonthSelect')
            .waitForElementVisible('@rangeEndMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeEndMonthSelect.selector + ' option[value="January"]')
            .click('@rangeEndYearSelect')
            .waitForElementVisible('@rangeEndYearSelect', 1000)
            .click(timeFilterPage.elements.rangeEndYearSelect.selector + ' option[value="2005"]');
    })

    When(/I select an unavailable range/, () => {
        return timeFilterPage
            .click('@rangeStartMonthSelect')
            .waitForElementVisible('@rangeStartMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeStartMonthSelect.selector + ' option[value="December"]')
            .click('@rangeStartYearSelect')
            .waitForElementVisible('@rangeStartYearSelect', 1000)
            .click(timeFilterPage.elements.rangeStartYearSelect.selector + ' option[value="2015"]')
            .click('@rangeEndMonthSelect')
            .waitForElementVisible('@rangeEndMonthSelect', 1000)
            .click(timeFilterPage.elements.rangeEndMonthSelect.selector + ' option[value="December"]')
            .click('@rangeEndYearSelect')
            .waitForElementVisible('@rangeEndYearSelect', 1000)
            .click(timeFilterPage.elements.rangeEndYearSelect.selector + ' option[value="2015"]')
    });

    Then(/^I see an error stating 'End date must be after the start date'/, () => {
        return timeFilterPage
                .waitForElementVisible('@dateRangeError', 1000)
                .expect.element('@dateRangeError').text.to.equal('End date must be after the start date');
    })

    Then(/^I see an error stating 'Data available from February 1996 until June 2015'/, () => {
        return timeFilterPage
                .waitForElementVisible('@unavailableDateRangeError', 1000)
                .expect.element('@unavailableDateRangeError').text.to.equal('Data available from February 1996 until June 2015');
    })

})