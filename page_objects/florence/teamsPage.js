module.exports = {
    url: process.env.FLORENCE_URL + "/florence/teams",
    elements: {
        heading: {
            selector: "//*[contains(text(), 'Select a team')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}
