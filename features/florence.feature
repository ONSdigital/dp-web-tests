Feature: Florence journey

@florence
Scenario: Login To Florence

    Given I open the florence login page
    Then I enter the email: "florence@magicroundabout.ons.gov.uk"
    And I enter the password: "one two three four"
    When I click the login button
    Then I should be on the florence homepage
    When I click on datasets
