module.exports = {
    url: (datasetID, instanceID) => {
        return process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/instances/" + instanceID + "/metadata";
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
