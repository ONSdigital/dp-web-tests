module.exports = {
    url: datasetID => {
        return process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/metadata"
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Dataset details')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
