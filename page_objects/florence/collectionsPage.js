module.exports = {
    url: process.env.FLORENCE_URL + "/florence/collections",
    elements: {
        heading: {
            selector: "//*[contains(text(), 'Select a collection')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
