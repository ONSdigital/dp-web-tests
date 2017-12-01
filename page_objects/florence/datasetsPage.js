module.exports = {
    url: process.env.FLORENCE_URL + "/florence/datasets",
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Select a dataset')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
