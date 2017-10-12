module.exports = {
    url: process.env.FLORENCE_URL + "/florence/login",
    elements: {
        body: 'body',
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="password"]',
        loginButton: 'button[type="submit"]'
    }
}