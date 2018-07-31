module.exports = {
    url: "http://localhost:20000/geography/",
    elements: {
        areatypes: {
            selector: ".area-type",
            locateStrategy: 'css selector'
        },
        areatypes0: {
            selector: "#area-type-0",
            locateStrategy: 'css selector'
        },
        areatypes1: {
            selector: "#area-type-1",
            locateStrategy: 'css selector'
        },
        areatypes2: {
            selector: "#area-type-2",
            locateStrategy: 'css selector'
        },
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@areatypes', 5000);
        },
    }]
}
