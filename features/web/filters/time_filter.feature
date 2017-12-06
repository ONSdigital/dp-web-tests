Feature: Filter a dataset by time 

User can apply a time filter(s) to a dataset

@web @datasets @happy_path
Scenario: Add the latest available time to filter job

    Given I go to the 'time' filter page
    When I select the 'latest date' option
    Then I can see that the 'latest date' option is checked
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' time filter applied
    Then I cleared the filters I'd applied

@web @datasets @happy_path
Scenario: Add a single time to the filter job

    Given I go to the 'time' filter page
    When I select the 'single range' option
    Then I can see that the 'single range' option is checked
    When I select a single month and year
    Then I can see the month and year have been selected
    When I save my selection(s)
    Then I am navigated to the filter options page
    Then I can see I have '1' time filter applied
    Then I cleared the filters I'd applied