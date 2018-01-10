Feature: Add dataset to collection

Users can add a dataset to a collection

@florence @datasets @collection @happy_path @smoke
Scenario: Add a dataset to a collection

    Given I go to the dataset 'Add to collection' page
    When I click on the select the edition dropdown
    Then I see a list of available collections
    When I select a collection
    Then I see the correct release date and time for the collection
    When I click 'Save and continue'
    Then I have successfully added the dataset to a collection

@florence @datasets @collection @happy_path @smoke
Scenario: Add a version to a collection

    Given I go to the version 'Add to collection' page
    When I click on the select the edition dropdown
    Then I see a list of available collections
    When I select a collection
    Then I see the correct release date and time for the collection
    When I click 'Save and continue'
    Then I have successfully added the dataset to a collection

@florence @datasets @collection @unhappy_path @smoke
Scenario: Error shown if no collection is selected

    Given I go to the dataset 'Add to collection' page
    When I click 'Save and continue'
    Then I am shown the error 'You must select a collection'