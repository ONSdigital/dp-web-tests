Feature: CMD Journey

@cmd
Scenario: Navigate to Filter Options from homepage

    Given I open the the dataset landing page with id "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    Then the dataset page title is "CPI - Office for National Statistics"
    And I click to "Filter and Download"
    Then the filter options title is "Filter Options - Office for National Statistics"
    And I click the "Goods and Services" dimension link
    Then the dimension title is "Goods and Services"
    And I click the first checkbox
    Then the selection updates with the selected element
    And the selection count increases
    When I click remove item
    Then the item is removed from the selection
    And the selection count is updated
    When I click add all
    And the filter selection contains all items
    When I click the "Save and Return to filter options" button
    And I click the "time" type dimension link
    Then the dimension type title is "Time"
    Then I click the first radio button and Save and Return

@cmd
Scenario: Add the latest available time to filter job

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the first radio button and Save and Return
    Then the filter options for time contains the latest result

@cmd
Scenario: Add a single time to the filter job

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the second radio button
    And I select "April" "2004" from the drop down and Save and Return
    Then the filter options for time contains the result "1 item added: April 2004"

@cmd
Scenario: Add a time range to the filter job

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the third radio button
    And I select "June" "2001" to "August" "2001" from the range drop down and Save and Return
    Then the filter options for time contains the result "3 items added: June 2001, July 2001, August 2001"

@cmd
Scenario: Add a list of times to the filter job

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the fourth radio button
    And I select "February-1999", "January-2004" and "December-2007" from the list and Save and Return
    Then the filter options for time contains the result "3 items added: February 1999, January 2004, December 2007"

@cmd
Scenario: The most recent time selection overrides any previous selections

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the third radio button
    And I select "June" "2001" to "August" "2001" from the range drop down and Save and Return
    Then the filter options for time contains the result "3 items added: June 2001, July 2001, August 2001"
    When I click the "time" type dimension link
    And I click the first radio button and Save and Return
    Then the filter options for time contains the latest result

@cmd

Scenario: Add all of the available times

    Given I have created a new filter job for dataset: "95c4669b-3ae9-4ba7-b690-87e890a1c67c"
    When I click the "time" type dimension link
    And I click the fourth radio button
    When I click the add all button and Save and Return
    Then the the filter options for time contains all results
