Feature: CMD Journey

@cmd
Scenario: Navigate to Filter Options from homepage

    Given I open the ONS homepage
    Then the title is "Home - Office for National Statistics"
    And the search form exists
    When I type "labour" into the search box
    And I click submit
    Then the title is "labour - Search - Office for National Statistics"
    When I choose the second search option
    And I click to "Filter and Download"
    Then the title is "Filter Options - Office for National Statistics"