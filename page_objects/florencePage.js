module.exports = {
    url: process.env.FLORENCE_URL + "/florence/login",
    elements: {
        body: 'body',
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="password"]',
        loginButton: 'button[type="submit"]',
        datasetsButton: 'a[class="nav__link js-nav-item js-nav-item--datasets"]',
        homepageTitle: 'h1[class="text-align-center"]',
        logoutButton: 'a[class="nav__link js-nav-item js-nav-item--logout"]',
        selectableTable: 'div[class="selectable-table"]',
        selectableDetailsSummary: 'summary[class="selectable-table__summary"]',
        selectableDetails: 'details[class="selectable-table__details"]',
        rowTitle: 'div[class="grid__col-6"]:nth-child(1) strong',
        editDetailsButton: 'a[class="inline-block margin-bottom--1"]',
        datasetID: 'span[class="inline-block margin-left--1"]'
    }
}