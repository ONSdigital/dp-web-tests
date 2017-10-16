Feature: Florence journey

@florence
Scenario: Login To Florence

    Given I open the florence login page
    When I enter the email: "florence@magicroundabout.ons.gov.uk"
    And I enter the password: "one two three four"
    When I click the login button
    Then I should be on the florence homepage
    And I logout

@florence
Scenario: Dataset journey

    Given I open the florence login page
    When I enter the email: "florence@magicroundabout.ons.gov.uk"
    And I enter the password: "one two three four"
    When I click the login button
    Then I should be on the florence homepage
    When I click on datasets
    Then a selectable table exists with expected fields
    And the table should contain a row titled "CPI"
    When I click on the row
    Then the row is expanded
    When I click on the Edit dataset details button
    Then the dataset details page is available for dataset id: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
