module.exports = {
    url: (datasetID, edition) => {
        datasetID = datasetID || "931a8a2a-0dc8-42b6-a884-7b6054ed3b68";
        edition = edition || "Time-series";
        return process.env.ROUTER_URL + "/datasets/" + datasetID + "/editions/" + edition + "/versions";
    },
    elements: {
        heading: {
            selector: "h1 strong",
            locateStrategy: 'css selector'
        },
        latestVersionLink: {
            selector: ".col > p > a",
            locateStrategy: 'css selector'
        },
        learnMore: {
            selector: "details summary",
            locateStrategy: 'css selector'
        },
        revisionsDescription: {
            selector: "details .panel",
            locateStrategy: 'css selector'
        },
        revisionDate: {
            selector: ".table-preview tr > td",
            locateStrategy: 'css selector'
        },
        revisionReason: {
            selector: ".table-preview tr td:nth-child(2n)",
            locateStrategy: 'css selector'
        },
        csvFile: {
            selector: "//*[contains(@class, 'table-preview')]/descendant::a[contains(text(), 'csv')]",
            locateStrategy: 'xpath'
        },
        xlsFile: {
            selector: "//*[contains(@class, 'table-preview')]/descendant::a[contains(text(), 'xls')]",
            locateStrategy: 'xpath'
        },
        filterButton: {
            selector: ".table-preview tr:last-child td:last-child .btn",
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
