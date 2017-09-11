Feature: ONS Website

@ons
Scenario: Opening ONS

    Given I open the ONS homepage
    Then the title is "Home - Office for National Statistics"
    And the search form exists