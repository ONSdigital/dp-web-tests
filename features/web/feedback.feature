Feature: Provide feedback on the website

Users can give us feedback about their experience using the website, including quickly telling us whether they completed the task they aimed to completed

@web @happy_path
Scenario: Give positive feedback via feedback form

    Given I am on a dataset editions page
    When I click the 'positive' feedback button
    Then I get confirmation that my feedback has been sent

@web @happy_path
Scenario: Give negative feedback via feedback form

    Given I am on a dataset editions page
    When I click the 'negative' feedback button
    Then I can see a form to submit my feedback
    When I add and send my feedback
    Then I get confirmation that my feedback has been sent

@web @unhappy_path
Scenario: Description error displayed when no feedback description provided

    Given I am on a dataset editions page
    When I click the 'negative' feedback button
    Then I can see a form to submit my feedback
    When I click the send button
    Then a "description" field error is displayed
    When I add and send my feedback
    Then I get confirmation that my feedback has been sent

@web @unhappy_path
Scenario: Email error displayed when invalid email address provided

    Given I am on a dataset editions page
    When I click the 'negative' feedback button
    Then I can see a form to submit my feedback
    Then I enter a valid description but invalid email address
    When I click the send button
    Then a "email" field error is displayed
