module.exports = {
    url: process.env.FLORENCE_URL + "/florence/login",
    elements: {
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="password"]',
        loginButton: 'button[type="submit"]'
    },
    commands: [{
        attemptLogin: function() {
            return this.click('@loginButton');
        },
        waitForLoad: function() {
            return this.waitForElementVisible('@loginButton', 5000);
        }
    }]
}
