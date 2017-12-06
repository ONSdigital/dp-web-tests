module.exports = {
    elements: {
        header: {
            selector: "#feedback-form-header",
            locateStrategy: 'css selector'
        },
        positiveFeedbackButton: {
            selector: '#feedback-form-yes',
            locateStrategy: 'css selector'
        },
        negativeFeedbackButton: {
            selector: '#feedback-form-no',
            locateStrategy: 'css selector'
        },
        feedbackConfirmation: {
            selector: '//*[contains(@class, "improve-this-page__prompt") and contains(text(), "Thanks for your feedback")]',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@header', 5000);
        }
    }]
}
