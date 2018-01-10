module.exports = {
    elements: {
        heading: {
            selector: 'h1',
            locateStrategy: 'css selector'
        },        
        successHeading: {
            selector: '//h1[contains(text(), "Success")]',
            locateStrategy: 'xpath'
        },
        collectionDropdown: {
            selector: '#collection',
            locateStrategy: 'css selector'
        },
        collectionList: {
            selector: '#collection option',
            locateStrategy: 'css selector'
        },
        collection: {
            selector: '#collection option:nth-child(2)',
            locateStrategy: 'css selector'
        },
        releaseDate: {
            selector: '.select-details__value',
            locateStrategy: 'css selector'
        },
        releaseTime: {
            selector: '.select-details span:last-child',
            locateStrategy: 'css selector'
        },
        saveAndContinueButton: {
            selector: '.btn',
            locateStrategy: 'css selector'
        },
        errorMessage: {
            selector: '.error-msg',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@heading', 5000);
        }
    }]
}