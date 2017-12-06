var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

var globalFeedback = client.page.globalFeedback();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    When(/^I click the 'positive' feedback button/, () => {
        return globalFeedback
            .waitForLoad()
            .click('@positiveFeedbackButton');
    });

    Then(/^I can see my feedback has been sent/, () => {
        return globalFeedback
            .waitForElementVisible('@feedbackConfirmation', 2000);
    });
});