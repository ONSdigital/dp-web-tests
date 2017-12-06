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
        singleMonthSelect: {
            selector: '#month-single',
            locateStrategy: 'css selector'
        },
        singleYearSelect: {
            selector: '#year-single',
            locateStrategy: 'css selector'
        }
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
        }
    }]
}
