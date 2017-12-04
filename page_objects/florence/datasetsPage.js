module.exports = {
    url: process.env.FLORENCE_URL + "/florence/datasets",
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Select a dataset')]",
            locateStrategy: 'xpath'
        },
        datasetWithVersionTitle: {
            selector: "//summary[@class='selectable-table__summary']//*[contains(text(), 'Acceptance test')]",
            locateStrategy: 'xpath'
        },
        datasetWithInstanceTitle: {
            selector: "//summary[@class='selectable-table__summary']//*[contains(text(), 'Acceptance test')]",
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
            selector: "details[open] summary ~* a[href$='datasets/931a8a2a-0dc8-42b6-a884-7b6054ed3b68/editions/Time-series/versions/2/metadata']",
            locateStrategy: "css selector"
        },
        datasetInstanceLink: {
            selector: "details[open] summary ~* a[href$='datasets/931a8a2a-0dc8-42b6-a884-7b6054ed3b68/instances/65b08a7d-85be-44e1-9743-df913217b782/metadata']",
            locateStrategy: "css selector"
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
