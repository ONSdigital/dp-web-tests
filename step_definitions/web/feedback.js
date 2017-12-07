var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var globalFeedback = client.page.globalFeedback();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    When(/^I click the '([^"]*)' feedback button/, feedbackType => {
        if (feedbackType === "positive") {
            return globalFeedback
                .waitForLoad()
                .click('@positiveFeedbackButton');
        }

        if (feedbackType === "negative") {
            return globalFeedback
            .waitForLoad()
            .click('@negativeFeedbackButton');
        }
    });

    Then(/^I get confirmation that my feedback has been sent/, () => {
        return globalFeedback
            .waitForElementVisible('@feedbackConfirmation', 2000);
    });


    /*
    Give negative feedback via feedback form
    */
    Then(/^I can see a form to submit my feedback/, () => {
        return globalFeedback
            .waitForElementVisible('@feedbackForm', 2000);
    });

    When(/^I add and send my feedback/, () => {
        return globalFeedback
            .setValue('@descriptionInput', 'This is acceptance test feedback')
            .setValue('@nameInput', 'Acceptance Test')
            .setValue('@emailInput', 'acceptance.test@email.com')
            .click('@sendButton');
    });

});