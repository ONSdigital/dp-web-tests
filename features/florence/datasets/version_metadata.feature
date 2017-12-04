Feature: New dataset version metadata

User can edit the metadata for a new version that available for a dataset

@florence @datasets @happy_path
Scenario: Edit a new version's release date

    Given I go to a version's metadata page
    When I change the release date
    Then I save the version's metadata
    When I refresh the page
    Then I see the new release date