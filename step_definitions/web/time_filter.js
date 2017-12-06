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

    
    /*
    Add the latest available time to filter job
    */
    When(/^I select the 'latest date' option/, () => {
        return timeFilterPage
            .click('@latestDateOption')
    });
    
    Then(/^I can see that the 'latest date' option is checked/, () => {
        return timeFilterPage
            .dateOptionIsChecked('latestDateOption');
    });

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
})