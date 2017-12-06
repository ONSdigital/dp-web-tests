Feature: Provide feedback on the website

Users can give us feedback about their experience using the website, including quickly telling us whether they completed the task they aimed to completed

@web @happy_path
Scenario: Give positive feedback via feedback form

    Given I go to the filter options page
    When I click the 'positive' feedback button
    Then I can see my feedback has been sent