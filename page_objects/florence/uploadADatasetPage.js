module.exports = {
    url: process.env.FLORENCE_URL + "/florence/uploads/data",
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Upload a dataset')]",
            locateStrategy: 'xpath'
        },
        uploadCPI: {
            selector: 'button[data-recipe-id="b944be78-f56d-409b-9ebd-ab2b77ffe187"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}