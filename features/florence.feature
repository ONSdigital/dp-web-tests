Feature: Florence journey

# @florence
# Scenario: Login To Florence

#     Given I open the florence login page
#     When I enter the email: "florence@magicroundabout.ons.gov.uk"
#     And I enter the password: "one two three four"
#     When I click the login button
#     Then I should be on the florence homepage
#     And I logout

# @florence
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
    When I click on the Edit dataset details button with the url: "931a8a2a-0dc8-42b6-a884-7b6054ed3b68/metadata"
    Then the dataset details page is available for dataset id: "931a8a2a-0dc8-42b6-a884-7b6054ed3b68"
    And I logout from new florence

# @florence
Scenario: Instance & version journey

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
    When I click on the view link with the url: "931a8a2a-0dc8-42b6-a884-7b6054ed3b68/editions"
    Then I see the metadata page
    And the dataset has the title "CPI"
    When I click the save button
    Then I confirm I am viewing a "version"
    And I logout from new florence
