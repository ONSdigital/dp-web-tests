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
            selector: '#feedback-form-confirmation',
            locateStrategy: 'css selector'
        },
        feedbackForm: {
            selector: '#feedback-form-container',
            locateStrategy: 'css selector'
        },
        descriptionInput: {
            selector: '#description-field',
            locateStrategy: 'css selector'
        },
        nameInput: {
            selector: '#name-field',
            locateStrategy: 'css selector'
        },
        emailInput: {
            selector: '#email-field',
            locateStrategy: 'css selector'
        },
        sendButton: {
            selector: '#feedback-form-submit',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@header', 5000);
        }
    }]
}
