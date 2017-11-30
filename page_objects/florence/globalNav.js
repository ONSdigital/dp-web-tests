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
        }
    }]
}
