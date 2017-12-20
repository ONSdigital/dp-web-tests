module.exports = {
    url: () => {
        return 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/consumerpriceinflation'
    },
    elements: {
        header: {
            selector: "//h1[contains(text(), 'Consumer price inflation')]",
            locateStrategy: "xpath"
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@header', 2000)
        }
    }]
}