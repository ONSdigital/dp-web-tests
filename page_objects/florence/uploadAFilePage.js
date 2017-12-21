module.exports = {
    url: (id) => {
        id = id || "057a7ea9-1109-4d24-85b6-5a32d7979277";
        return process.env.FLORENCE_URL + "/florence/uploads/data/" + id;
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Upload new file(s)')]",
            locateStrategy: 'xpath'
        },
        fileInput: {
            selector: 'input[id="dataset-upload-0"]',
            locateStrategy: 'css selector'
        },
        fileLink: {
            selector: 'a[target="_blank"]',
            locateStrategy: 'css selector'
        },
        saveAndContinue: {
            selector: "//button[contains(text(), 'Save and continue')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}