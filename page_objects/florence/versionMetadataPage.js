module.exports = {
    url: (datasetID, edition, version) => {
        datasetID = datasetID || '931a8a2a-0dc8-42b6-a884-7b6054ed3b68';
        edition = edition || 'Time-series';
        version = version || '2' ;
        
        return process.env.FLORENCE_URL + "/florence/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version + "/metadata";
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Metadata')]",
            locateStrategy: 'xpath'
        },
        releaseDateInput: {
            selector: "#release_date",
            locateStrategy: 'css selector'
        },
        saveButton: {
            selector: "#save-and-return",
            locateStrategy: 'css selector'
        },
        geographyInput: {
            selector: "#geography",
            locateStrategy: 'css selector'
        },
        saveAndAdd: {
            selector: "#save-and-add",
            locateStrategy: 'css selector'
        },
        collection: {
            selector: "#collection",
            locateStrategy: 'css selector'
        },
        saveAndContinue: {
            selector: "#save-and-continue",
            locateStrategy: 'css selector'
        },
        successHeading: {
            selector: "//h1[contains(text(), 'Success')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        },
        savePage: function() {
            return this.click('@saveButton');
        }
    }]
}
