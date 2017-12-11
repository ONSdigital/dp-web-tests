Feature: Landing page for a version of dataset

User can decide whether this is the correct dataset, using the metadat and can access the dataset filtering screens and whole download files

Scenario: Access the dataset filter journey

    Given I go to a dataset landing page
    When I click the 'filter' call-to-action
    Then I am navigated to the filter options page