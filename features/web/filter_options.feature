Feature: Dimensions to filter a dataset on

Users can select dimensions that they want to filter the dataset by and proceed to the download and preview screen

@web @datasets @happy_path @smoke
Scenario: Access multiple filters from the filter options page

    Given I go to the filter options page
    When I click the first dimension
    Then I can see the first filter page
    Then I can navigate back to the filter options
    When I click the second dimension
    Then I can see the second filter page

@web @datasets @happy_path
Scenario: Clear filters that have been applied

    Given I go to the filter options page
    Then I can see I have '0' filter(s) applied
    When I click the first dimension
    Then I can see the first filter page
    Then I check an option
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' filter(s) applied
    When I clear my applied filters
    Then I can see I have '0' filter(s) applied

# TODO Scenario: Disable button to continue to preview and download screen