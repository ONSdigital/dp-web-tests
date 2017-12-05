module.exports = {
    elements: {
        checkbox: {
            selector: '.checkbox__input',
            locateStrategy: 'css selector'
        },
        uncheckedCheckbox: {
            // Have to select label because nightwatch doesn't like clicks on checkbox inputs:
            // https://github.com/nightwatchjs/nightwatch/issues/362
            selector: '.checkbox__input:not(:checked) ~ .checkbox__label',
            locateStrategy: 'css selector'
        },
        saveButton: {
            selector: '#filter-form *[name="save-and-return"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@checkbox', 5000);
        },
        saveAndReturn: function() {
            return this.click('@saveButton');
        }
    }]
}
