var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var filterOptionsPage = client.page.filterOptionsPage();
var filterPage = client.page.filterPage();

defineSupportCode(({Given, Then, When}) => {
    let firstLinkTitle;
    let secondLinkTitle;

    /*
    Reused across scenarios
    */
    Given(/^I go to the filter options page$/, () => {
        return filterOptionsPage
            .navigate()
            .waitForLoad();
    });
    
    When(/^I click the first dimension$/, () => {
        return filterOptionsPage.getText('@firstFilterLink', function(text) {
            firstLinkTitle = text.value.replace(/^Add at least one\n/, '').replace(/^Filter\nby /, '');
            return filterOptionsPage
                // .api.pause(10000)
                .click('@firstFilterLink')
        })
    });

    Then(/^I can see the first filter page/, () => {
        return filterOptionsPage
            .expect.element('h1').text.to.equal(firstLinkTitle);
    });

    Then(/^I can navigate back to the filter options/, () => {
        return filterOptionsPage
            .navigate()
            .waitForLoad();
    });

    Then(/^I can see I have '([^"]*)' filter\(s\) applied/, count => {
        // if (count == 0) {
        //     return filterOptionsPage
        //         .expect.element('@editedFilterLink').to.not.be.present;
        // }

        return filterOptionsPage
            .numberOfEditedFilters(filtersCount => {
                return filterOptionsPage.assert.equal(filtersCount, count);
            });
    });

    When(/^I click to preview and download/, () => {
        return filterOptionsPage
            .click('@previewDownloadButton');
    })

    /*
    Access multiple filters from the filter options page
    */
    When(/^I click the second dimension$/, () => {
        return filterOptionsPage.getText('@secondFilterLink', function(text) {
            secondLinkTitle = text.value.replace(/^Add at least one\n/, '').replace(/^Filter\nby /, '');
            return filterOptionsPage
                .click('@secondFilterLink')
        })
    });

    Then(/^I can see the second filter page/, () => {
        return filterOptionsPage
            .expect.element('h1').text.to.equal(secondLinkTitle);
    });


    /*
    Clear filters that have been applied
    */

    Then(/^I check an option/, () => {
        return filterPage
            .click('@uncheckedCheckbox');
    });
    
    When(/^I save my selection\(s\)/, () => {
        return filterPage
            .saveAndReturn();
    });

    Then(/^I am navigated to the filter options page/, () => {
        return filterOptionsPage
            .waitForLoad();
    });
    
    When(/^I clear my applied filters/, () => {
        return filterOptionsPage
            .click('@clearAllLink');
    });

    /*
    Shown error when no dimensions have been selected
    */

    Then(/^I am shown an error to add filters/, () => {
        return filterOptionsPage
            .expect.element('@errorMessage').to.be.visible;
    });
    

})