Feature: Dataset metadata

User can edit the metadata for a dataset

@florence @datasets @happy_path
Scenario: View the dataset metadata page

    Given I go to a dataset metadata page
    Then I can see the title for the dataset is "Acceptance test"

@florence @datasets @happy_path
Scenario: Edit the dataset description for the dataset

    Given I go to a dataset metadata page
    Then I can see the metadata description for the dataset is "This is the acceptance test description."
    When I edit the description field to "New description"
    And I save the page
    Given I go to a dataset metadata page
    Then I see the description has been updated to "New description"

@florence @datasets @happy_path
Scenario: Add keywords to the dataset

    Given I go to a dataset metadata page
    Then I can see the keywords field is empty
    When I add the keywords "keyword 1, keyword 2"
    And I save the page
    Given I go to a dataset metadata page
    Then I see the new keywords are displayed as "keyword 1, keyword 2"

@florence @datasets @happy_path
Scenario: Confirm the dataset is a national statistic

    Given I go to a dataset metadata page
    Then I can see the national statistic checkbox is checked

@florence @datasets @happy_path
Scenario: Add a release frequency for the dataset

    Given I go to a dataset metadata page
    Then I can see the release frequency selector shows "Select an option"
    When I change the value to be "weekly"
    And I save the page
    Given I go to a dataset metadata page
    Then I see the selected option is "weekly"

@florence @datasets @happy_path
Scenario: Confirm contact details are correct

    Given I go to a dataset metadata page
    Then I can see the contact name is "James Tucker"
    Then I can see the contact email is "cpi@ons.gsi.gov.uk"
    Then I can see the contact telephone is "+44 (0)1633 456900"

@florence @datasets @happy_path
Scenario: Add a related dataset to the dataset

    Given I go to a dataset metadata page
    When I click to add a related dataset
    And I add the title "Test"
    And I add the url "test.com"
    When I click "Add"
    Then I can see the related dataset has been added


@florence @datasets @happy_path
Scenario: Edit the QMI link for the dataset

    Given I go to a dataset metadata page
    Then I can see the related qmi url input field is "https://www.ons.gov.uk/economy/inflationandpriceindices/qmis/consumerpriceinflationqmi"
    When I edit the related qmi url input field to "test.com"
    And I save the page
    Given I go to a dataset metadata page
    Then I see the related qmi url input has been updated to "test.com"


@florence @datasets @happy_path
Scenario: Edit an existing related dataset

    Given I go to a dataset metadata page
    When I click to edit a related dataset
    And I add the title "Test"
    And I add the url "test.com"
    When I click "Add"
    Then I can see the related dataset has been updated

@florence @datasets @happy_path
Scenario: Delete an existing related dataset

    Given I go to a dataset metadata page
    When I click to delete a related dataset
    Then I can see the related dataset has been deleted