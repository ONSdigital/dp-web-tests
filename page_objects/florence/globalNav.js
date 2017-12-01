module.exports = {
    elements: {
        logoutButton: {
            selector: "//a[contains(text(), 'Logout')]",
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        logOut: function() {
            return this.click('@logoutButton');
        },
        waitForLoad: function() {
            return this.waitForElementVisible('@logoutButton', 5000);
        }
    }]
}
