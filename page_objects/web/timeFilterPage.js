module.exports = {
    url: (filterID) => {
        filterID = filterID || "f83edc95-54c3-42b9-a8db-dddedd2f1998";
        return process.env.ROUTER_URL + "/filters/" + filterID + "/dimensions/time";
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Time')]",
            locateStrategy: 'xpath'
        },
        latestDateOption: {
            selector: '#time-selection-latest',
            locateStrategy: 'css selector'
        },
        singleDateOption: {
            selector: '#time-selection-single',
            locateStrategy: 'css selector'
        },
        rangeDateOption: {
            selector: '#time-selection-range',
            locateStrategy: 'css selector'
        },
        listDateOption: {
            selector: '#time-selection-list',
            locateStrategy: 'css selector'
        },
        singleMonthSelect: {
            selector: '#month-single',
            locateStrategy: 'css selector'
        },
        singleYearSelect: {
            selector: '#year-single',
            locateStrategy: 'css selector'
        },
        rangeStartMonthSelect: {
            selector: '#start-month',
            locateStrategy: 'css selector'
        },
        rangeStartYearSelect: {
            selector: '#start-year',
            locateStrategy: 'css selector'
        },
        rangeEndMonthSelect: {
            selector: '#end-month',
            locateStrategy: 'css selector'
        },
        rangeEndYearSelect: {
            selector: '#end-year',
            locateStrategy: 'css selector'
        },
        addAllLink: {
            selector: '#add-all',
            locateStrategy: 'css selector'
        },
        listDateOptionCheckbox: {
            selector: '.multiple-choice__content input[type="checkbox"]',
            locateStrategy: 'css selector'
        },
        visibleAddAllSaveReturn: {
            selector: '#add-all-save-and-return',
            locateStrategy: 'css selector'
        },
        hiddenAddAllSaveReturn: {
            selector: '#add-all-save-and-return.js-hidden',
            locateStrategy: 'css selector'
        },
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        },
        dateOptionIsChecked: function(elementName, done) {
            return this.api.element(this.elements[elementName].locateStrategy, this.elements[elementName].selector, result => {
                return this.api.elementIdSelected(result.value.ELEMENT, response => {
                    return this.verify.ok(response.value, elementName + " is selected");
                });
            });
        },
        listDateOptionIsChecked: function(dateID, done) {
            return this.api.element('css selector', dateID, result => {
                return this.api.elementIdSelected(result.value.ELEMENT, response => {
                    return this.verify.ok(response.value, dateID + " is checked");
                });
            });
        },
        allListDateOptionsAreChecked: function(done) {
            return this.api.elements(this.elements.listDateOptionCheckbox.locateStrategy, this.elements.listDateOptionCheckbox.selector, results => {
                results.value.forEach(result => {
                    return this.api.elementIdSelected(result.ELEMENT, response => {
                        return this.verify.ok(response.value, "Time checkbox is checked");
                    });
                })
            });
        },
        numberOfAvailableTimes: function(done) {
            return this.api.elements('css selector', '.multiple-choice__content input[type="checkbox"]', result => {
                done(result.value.length);
            });
        }
    }]
}
