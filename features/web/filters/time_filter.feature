Feature: Filter a dataset by time 

User can apply a time filter(s) to a dataset

@web @datasets @happy_path
Scenario: Add the latest available time to filter job

    Given I go to the 'time' filter page
    When I select the 'latest date' option
    Then I can see that the 'latest date' option is checked
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @happy_path
Scenario: Add a single time to the filter job

    Given I go to the 'time' filter page
    When I select the 'single time' option
    Then I can see that the 'single time' option is checked
    When I select a single month and year
    Then I can see the month and year have been selected
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @happy_path
Scenario: Add a time range to the filter job

    Given I go to the 'time' filter page
    When I select the 'range' option
    Then I can see that the 'range' option is checked
    When I select a date range
    Then I can see the date range has been selected
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '14' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @happy_path
Scenario: Add a list of times to the filter job

    Given I go to the 'time' filter page
    When I select the 'list' option
    Then I can see that the 'list' option is checked
    When I select dates from the list
    Then I can see the dates have been selected
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '4' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @happy_path
Scenario: Selecting the latest available time overrides a previous selection

    Given I go to the 'time' filter page
    When I select the 'single time' option
    Then I can see that the 'single time' option is checked
    When I select a single month and year
    Then I can see the month and year have been selected
    When I select the 'latest date' option
    Then I can see that the 'latest date' option is checked
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @happy_path
Scenario: Add all of the available times

    Given I go to the 'time' filter page
    When I select the 'list' option
    Then I can see that the 'list' option is checked
    And I can see the save and return button is not available at the top
    When I click the 'add all' link
    Then I can see all available times have been selected
    And I can see the save and return button is available at the top
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have 'all' time filter(s) applied
    Then I clear the filters I applied

@web @datasets @unhappy_path @smoke
Scenario: Error is displayed for invalid single time selection

    Given I go to the 'time' filter page
    When I select the 'single time' option
    Then I can see that the 'single time' option is checked
    When I save my selection(s)
    Then I see an error to 'Select month and year'
    When I only select a 'month'
    When I save my selection(s)
    Then I see an error to 'Select month and year'
    When I only select a 'year'
    When I save my selection(s)
    Then I see an error to 'Select month and year'

@web @datasets @unhappy_path @smoke
Scenario: Error is displayed for invalid time range selection

    Given I go to the 'time' filter page
    When I select the 'range' option
    Then I can see that the 'range' option is checked
    When I save my selection(s)
    Then I see an error to 'Select a range'
    When I only select a 'start month'
    When I save my selection(s)
    Then I see an error to 'Select a range'
    When I only select a 'start year'
    When I save my selection(s)
    Then I see an error to 'Select a range'
    When I select an 'end month' earlier than the 'start month'
    When I save my selection(s)
    Then I see an error stating 'End date must be after the start date'
    When I select an unavailable range
    When I save my selection(s)
    Then I see an error stating 'Data available from February 1996 until June 2015'
