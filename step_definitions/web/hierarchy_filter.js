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
                const count = result.value.substr(0, result.value.indexOf(' item'));
                filterOptionsPage.assert.equal(count, numberOfTopLevelOptions, 'All filters are applied');
            });
    });

    When(/^I search for '([^"]*)' in the hierarchy$/, (term) => {
        return hierarchyFilterPage
            .setValue('@searchInput', term)
            .click('@searchSubmit');
    });

    Then(/^I am displayed with '([^"]*)' search results for '([^"]*)'$/, (numberOfResults, term) => {
        return hierarchyFilterPage
            .waitForElementPresent('@searchResultsInfo', 2000)
            .getText('@searchResultsInfo', result => {
                hierarchyFilterPage.assert.equal(result.value, numberOfResults + ' results containing '+term+'.');
            })
    })

    Then(/^I can see all options have been checked/, () => {
        return hierarchyFilterPage
            .allOptionsAreChecked();
    });

    Then(/I can see that my '([^"]*)' selected search results have been applied/, (numberOfResults) => {
        return filterOptionsPage
            .getText('@hierarchyNumberAdded', result => {
                const count = result.value.substr(0, result.value.indexOf(' item'));
                filterOptionsPage.assert.equal(count, numberOfResults, 'All filters are applied');
            });
    })

    Then(/I am given advice on how to search for a valid term/, () => {
        return hierarchyFilterPage
            .getText('@searchAdvice', result => {
                hierarchyFilterPage.assert.equal(result.value, "Please try:\nMaking sure that all words are spelled correctly\nSearching again using different words\nCheck the dataset includes this Goods and Services option");
            });
    })

})