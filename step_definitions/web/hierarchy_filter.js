var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var filterOptionsPage = client.page.filterOptionsPage();
var hierarchyFilterPage = client.page.hierarchyFilterPage();

defineSupportCode(({Given, Then, When}) => {
    var numberOfTopLevelOptions;

    /*
    Reused across scenarios
    */
    Given(/^I go to a 'hierarchy' filter page/, () => {
        return hierarchyFilterPage
            .navigate()
            .waitForLoad();
    });


    /*
    Add all of the top level options
    */
    When(/^I click the 'add all options' link/, () => {
        hierarchyFilterPage.numberOfAvailableOptions(count => {
            numberOfTopLevelOptions = count;
        });
        return hierarchyFilterPage
            .click('@addAllLink');
    });

    Then(/^I can see 'all top level' options have been checked/, () => {
        return hierarchyFilterPage
            .allOptionsAreChecked();
    });

    Then(/^I can see 'all top levels' hierarchy filter\(s\) applied/, () => {
        return filterOptionsPage
            .getText('@hierarchyNumberAdded', result => {
                const count = result.value.substr(0, result.value.indexOf(' added'));
                filterOptionsPage.assert.equal(count, numberOfTopLevelOptions, 'All filters are applied');
            });
    });

})