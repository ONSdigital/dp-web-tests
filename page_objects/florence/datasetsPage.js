module.exports = {
    url: process.env.FLORENCE_URL + "/florence/datasets",
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Select a dataset')]",
            locateStrategy: 'xpath'
        },
        datasetWithVersionTitle: {
            selector: "//summary[@class='selectable-table__summary']//*[contains(text(), '466')]",
            locateStrategy: 'xpath'
        },
        datasetWithInstanceTitle: {
            selector: "//summary[@class='selectable-table__summary']//*[contains(text(), 'CPI')]",
            locateStrategy: 'xpath'
        },
        datasetDetails: {
            selector: "details[open] summary ~*",
            locateStrategy: "css selector"
        },
        datasetMetadataLink: {
            selector: "//details[@open]//a[contains(text(), 'Edit dataset details')]",
            locateStrategy: "xpath"
        },
        datasetVersionLink: {
            selector: "details[open] summary ~* a[href$='datasets/466/editions/Time-series/versions/1/metadata']",
            locateStrategy: "css selector"
        },
        datasetInstanceLink: {
            selector: "details[open] summary ~* a[href$='datasets/95c4669b-3ae9-4ba7-b690-87e890a1c67c/instances/f20549a3-485e-4b61-82da-29f2f1064583/metadata']",
            locateStrategy: "css selector"
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
