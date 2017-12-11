Feature: Landing page for a version of dataset

User can decide whether this is the correct dataset, using the metadat and can access the dataset filtering screens and whole download files

@web @datasets @happy_path @smoke
Scenario: Access the dataset filter journey

    Given I go to a dataset landing page
    When I click the 'filter' call-to-action
    Then I am navigated to the filter options page

@web @datasets @happy_path @smoke
Scenario: Download a metadata file

    Given I go to a dataset landing page
    When I click the 'other download options' call-to-action
    Then I can see the metadata file download