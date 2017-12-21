module.exports = {
    url: (id) => {
        id = id || "057a7ea9-1109-4d24-85b6-5a32d7979277";
        return process.env.FLORENCE_URL + "/florence/uploads/data/" + id + "/metadata";
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Dataset upload details')]",
            locateStrategy: 'xpath'
        },
        editionSelector: {
            selector: 'select[id="editions"]',
            locateStrategy: 'css selector'
        },
        submit: {
            selector: "//button[contains(text(), 'Submit to publishing')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}