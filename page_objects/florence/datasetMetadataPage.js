module.exports = {
    url: (datasetID) => {
        datasetID = datasetID || '931a8a2a-0dc8-42b6-a884-7b6054ed3b68';
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
            selector: "textarea#description",
            locateStrategy: 'css selector'
        },
        keywordsInput: {
            selector: "#keywords",
            locateStrategy: 'css selector'
        },
        nationalStatCheck: {
            selector: "#national-statistic",
            locateStrategy: 'css selector'
        },        
        releaseFreqSelect: {
            selector: "#release-frequency",
            locateStrategy: 'css selector'
        },
        releaseFreqSelectNext: {
            selector: "#release-frequency option:nth-child(2)",
            locateStrategy: 'css selector'
        },
        relatedDatasetsBtn: {
            selector: "//button[contains(text(), 'Add related link')]",
            locateStrategy: 'xpath'
        },
        relatedDatasetsCardList: {
            selector: ".related-datasets div ul li:last-child .card__body .card__title",
            locateStrategy: 'css selector'
        },
        relatedDocsBtn: {
            selector: "//button[contains(text(), 'Add document')]",
            locateStrategy: 'xpath'
        },
        relatedMethodBtn: {
            selector: "//button[contains(text(), 'Add methodology')]",
            locateStrategy: 'xpath'
        },
        relatedTitle: {
            selector: "#add-related-content-title",
            locateStrategy: 'css selector'
        },
        relatedURL: {
            selector: "#add-related-content-url",
            locateStrategy: 'css selector'
        },
        addBtn: {
            selector: ".modal__overlay .modal__inner form .modal__footer button:first-child",
            locateStrategy: 'css selector'
        },
        deleteBtn: {
            selector: "//button[contains(text(), 'Delete')]",
            locateStrategy: 'xpath'
        },
        editBtn: {
            selector: "//button[contains(text(), 'Edit')]",
            locateStrategy: 'xpath'
        },
        relatedQMIInput: {
            selector: "#relatedQMI",
            locateStrategy: 'css selector'
        },
        cardTitle: {
            selector: ".card__title",
            locateStrategy: 'css selector'
        },
        UsageInfoInput: {
            selector: "#license",
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
        },
        saveButton: {
            selector: "#save-and-return",
            locateStrategy: 'css selector'
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
