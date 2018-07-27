module.exports = {
    url: "http://localhost:20000/geography/",
    elements: {
        // areatypes: {
            areaTypes: "#area-types",
            // locateStrategy: 'css selector'
        // },
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@areaTypes', 5000);
        },
    }]
}
