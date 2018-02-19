Feature: New dataset version metadata

User can edit the metadata for a new version that available for a dataset

@florence @datasets @happy_path
Scenario: Edit a new version's release date

    Given I go to a version's metadata page
    When I change the release date
    Then I save the version's metadata
    When I refresh the page
    Then I see the new release date

@florence @datasets @happy_path
Scenario: Add a dimension description to an available dimension

    Given I go to a version's metadata page
    When I add "Hello World" as the geography dimension description
    Then I save the version's metadata
    When I refresh the page
    Then I see the geography dimension is saved as "Hello World"

@florence @datasets @happy_path
Scenario: Add an edition confirmed dataset to a collection

    Given I go to a version's metadata page
    Then I should be able to see the add to collection button
    When I click on the add to collection button
    Then I select the first collection and save and continue
    Then I should have successfully added the dataset to a collection
