module.exports = {
    url: (datasetID, edition, version) => {
        datasetID = datasetID || "931a8a2a-0dc8-42b6-a884-7b6054ed3b68";
        edition = edition || "Time-series";
        version = version || "1";
        return process.env.ROUTER_URL + "/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version;
    },
    elements: {
        filterButton: {
            selector: "//*[contains(@class, 'btn') and contains(@value, 'Filter and download')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@filterButton', 5000);
        }
    }]
}
