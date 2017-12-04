Feature: Select a dataset

Users can view all datasets available and can access screens to edit them or new versions

@florence @datasets @happy_path
Scenario: Access the 'edit metadata' screen for a dataset

    Given I go to the datasets page
    When I select any dataset
    Then I can see a dataset's available actions
    When I click the 'edit metadata' link
    Then I see the dataset metadata page

@florence @datasets @happy_path
Scenario: Access the 'edit metadata' screen for a version

    Given I go to the datasets page
    When I select a dataset with a new version
    Then I can see a dataset's available actions
    When I click the 'edit version metadata' link
    Then I see the version metadata page

@florence @datasets @happy_path
Scenario: Access the 'edit metadata' screen for an instance

    Given I go to the datasets page
    When I select a dataset with a new instance
    Then I can see a dataset's available actions
    When I click the 'edit instance metadata' link
    Then I see the instance metadata page