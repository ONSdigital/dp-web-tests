module.exports = {
    url: "http://localhost:20000/geography/Countries",
    elements: {
        areatypes: {
            selector: ".area-type",
            locateStrategy: 'css selector'
        },
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@areatypes', 5000);
        },
    }]
}
