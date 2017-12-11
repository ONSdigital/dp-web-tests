module.exports = {
    url: (datasetID) => {
        datasetID = datasetID || "931a8a2a-0dc8-42b6-a884-7b6054ed3b68";
        return process.env.ROUTER_URL + "/datasets/" + datasetID;
    },
    elements: {
        pageType: {
            selector: "//*[contains(@class, 'page-intro__type') and contains(text(), 'Editions')]",
            locateStrategy: 'xpath'
        },
        editionLink: {
            selector: 'a[id^="edition-"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@pageType', 5000);
        }
    }]
}
