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
    When I click the "Add Range" link
    Then the filter selection contains one item
