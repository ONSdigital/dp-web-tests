module.exports = {
    url: (filterID) => {
        filterID = filterID || "f83edc95-54c3-42b9-a8db-dddedd2f1998";
        return process.env.ROUTER_URL + "/filters/" + filterID + "/dimensions/aggregate";
    },
    elements: {
        browseHeading: {
            selector: "//h2[contains(text(), 'Browse')]",
            locateStrategy: 'xpath'
        },
        addAllLink: {
            selector: 'input[name="add-all"]',
            locateStrategy: 'css selector'
        },
        optionCheckbox: {
            selector: '#filter-form input[type="checkbox"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@browseHeading', 5000);
        },
        allOptionsAreChecked: function(done) {
            return this.api.elements(this.elements.optionCheckbox.locateStrategy, this.elements.optionCheckbox.selector, results => {
                results.value.forEach(result => {
                    return this.api.elementIdSelected(result.ELEMENT, response => {
                        return this.verify.ok(response.value, "Checkbox is checked");
                    });
                })
            });
        },
        numberOfAvailableOptions: function(done) {
            return this.api.elements(this.elements.optionCheckbox.locateStrategy, this.elements.optionCheckbox.selector, result => {
                done(result.value.length);
            });
        }
    }]
}
