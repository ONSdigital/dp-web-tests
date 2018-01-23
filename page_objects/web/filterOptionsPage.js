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
            selector: '//a[contains(@class, "filter-overview__link--edit")]',
            locateStrategy: 'xpath'
        },
        firstFilterLink: {
            selector: '//*[contains(@class, "filter-overview")]//descendant::a[2]//descendant::span',
            locateStrategy: 'xpath'
        },
        secondFilterLink: {
            selector: '//*[contains(@class, "filter-overview")]//descendant::a[3]//descendant::span',
            locateStrategy: 'xpath'
        },
        clearAllLink: {
            selector: 'a[href$="/dimensions/clear-all"]',
            locateStrategy: 'css selector'
        },
        timeFilterNumberAdded: {
            selector: '#number-added-time',
            locateStrategy: 'css selector'
        },
        hierarchyNumberAdded: {
            selector: '#number-added-goods-and-services',
            locateStrategy: 'css selector'
        },
        previewDownloadButton: {
            selector: '#preview-download',
            locateStrategy: 'css selector'
        },
        errorMessage: {
            selector: '#options-error',
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
