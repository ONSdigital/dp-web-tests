module.exports = {
    url: datasetID => {
        return process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/metadata"
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Dataset details')]",
            locateStrategy: 'xpath'
        },
        datasetID: {
            selector: "//span[contains(@class, 'inline-block margin-left--1') and contains(text(), '931a8a2a-0dc8-42b6-a884-7b6054ed3b68')]",
            locateStrategy: 'xpath'
        },
        title: {
            selector: "#title",
            locateStrategy: 'css selector'
        },
        description: {
            selector: "#description",
            locateStrategy: 'css selector'
        },
        contactName: {
            selector: "#contactName",
            locateStrategy: 'css selector'
        },
        contactEmail: {
            selector: "#contactEmail",
            locateStrategy: 'css selector'
        },
        contactPhone: {
            selector: "#contactPhone",
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
