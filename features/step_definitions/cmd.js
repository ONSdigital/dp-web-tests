var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    When(/^I type "([^"]*)" into the search box$/, (term) => {
        client.setValue('input[name="q"]', term);
    });

    Then(/^I click submit$/, () => {
        client
            .click('#nav-search-submit')
            .pause(1000);
    });

    When(/^I choose the second search option$/, () => {
        client
            .click('a[href="/employmentandlabourmarket/peopleinwork/workplacedisputesandworkingconditions/datasets/labourdisputesbysectorlabd02"]')
            .pause(1000);
    });

    Then(/^I click to "([^"]*)"$/, (action) => {
        client
            .click('input[value="'+action+'"]')
            .pause(1000);
    });
});