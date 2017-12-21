module.exports = {
    url: (id) => {
        id = id || "057a7ea9-1109-4d24-85b6-5a32d7979277";
        return process.env.FLORENCE_URL + "/florence/uploads/data/" + id;
    },
    elements: {
        heading: {
            selector: "//h1[contains(text(), 'Your dataset upload is complete')]",
            locateStrategy: 'xpath'
        },
        dimensionList: {
            selector: 'ul[class="list"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        },
        numberOfVisibleDimensions: function(element, done) {
            return this.api.elements('css selector', element, result => {
              done(result.value.length);
            });
        },
    }]
}