module.exports = {
    url: process.env.FLORENCE_URL + "/florence/datasets",
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Select a dataset')]",
            locateStrategy: 'xpath'
        },
        datasetTitle: {
            selector: "//summary[@class='selectable-table__summary']//*[contains(text(), '466')]",
            locateStrategy: 'xpath'
        },
        datasetDetails: {
            selector: "details[open] summary ~*",
            locateStrategy: "css selector"
        },
        datasetMetadataLink: {
            selector: "details[open] summary ~* a[href$='datasets/466/metadata']",
            locateStrategy: "css selector"
        },
        datasetVersionLink: {
            selector: "details[open] summary ~* a[href$='datasets/466/editions/Time-series/versions/1/metadata']",
            locateStrategy: "css selector"
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
