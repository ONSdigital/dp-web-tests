module.exports = {
    url: (filterID) => {
        filterID = filterID || "f83edc95-54c3-42b9-a8db-dddedd2f1998";
        return process.env.ROUTER_URL + "/filters/" + filterID + "/dimensions";
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Filter options')]",
            locateStrategy: 'xpath'
        },
        editedFilterLink: {
            selector: '//*[contains(@class, "filter-overview__filter") and not(contains(text(), "Nothing added yet"))]',
            locateStrategy: 'xpath'
        },
        firstFilterLink: {
            selector: '//*[contains(@class, "filter-overview")]//descendant::a[2]',
            locateStrategy: 'xpath'
        },
        secondFilterLink: {
            selector: '//*[contains(@class, "filter-overview")]//descendant::a[2]',
            locateStrategy: 'xpath'
        },
        clearAllLink: {
            selector: 'a[href$="/dimensions/clear-all"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        },
        numberOfEditedFilters: function(done) {
            return this.api.elements(this.elements.editedFilterLink.locateStrategy, this.elements.editedFilterLink.selector, result => {
                done(result.value.length);
            });
        }
    }]
}
