module.exports = {
    url: (datasetID, edition, version) => {
        return process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version + "/metadata";
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'New data')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
