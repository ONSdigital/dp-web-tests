module.exports = {
    url: process.env.FLORENCE_URL + "/florence/login",
    elements: {
        body: 'body',
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="password"]',
        loginButton: 'button[type="submit"]',
        datasetsButton: 'a[class="nav__link js-nav-item js-nav-item--datasets"]',
        homepageTitle: 'h1[class="text-align-center"]',
        logoutButton: 'ul[class="nav__list"] li:last-child > a',
        logoutButtonNew: 'ul[class="global-nav__list"] li:last-child > a',
        selectableTable: 'div[class="selectable-table"]',
        selectableDetailsSummary: 'summary[class="selectable-table__summary"]',
        selectableDetails: 'details[class="selectable-table__details"]',
        rowTitle: 'div[class="grid__col-6"]:nth-child(1) strong',
        datasetID: 'span[class="inline-block margin-left--1"]',
        viewLink: '.simple-table__row div:last-child > a',
        pageTitle: 'h1',
        datasetTitle: 'h2',
        saveButton: 'button'
    }
}
