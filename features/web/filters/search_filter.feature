Feature: Search and add options from a hierarchy

Users can search a hierarchy of data and apply filters to a dataset through the journey

@web @datasets @happy_path @filter_search
Scenario: Add filters based on a search term

    Given I go to a 'hierarchy' filter page
    When I search for 'Furniture' in the hierarchy
    Then I am displayed with '3' search results for 'Furniture'
    When I click the 'add all options' link
    Then I can see all options have been checked
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see that my '3' selected search results have been applied
    Then I clear the filters I applied

@web @datasets @unhappy_path @filter_search
Scenario: An invalid search term is entered

    Given I go to a 'hierarchy' filter page
    When I search for 'An incorrect search term' in the hierarchy
    Then I am displayed with '0' search results for 'An incorrect search term'
    And I am given advice on how to search for a valid term