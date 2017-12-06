Feature: Browse and add options from a hierarchy

Users can browse through a hierarchy of data and apply filters to a dataset throught the journey

@web @datasets @happy_path @hierarchy_filter
Scenario: Add all of the top level options

    Given I go to a 'hierarchy' filter page
    When I click the 'add all options' link
    Then I can see 'all top level' options have been checked
    When I save my selection(s)
    Then I am navigated to the filter options page
    And I can see 'all top levels' hierarchy filter(s) applied
    Then I clear the filters I applied