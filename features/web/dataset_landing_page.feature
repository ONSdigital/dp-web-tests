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

@web @datasets @happy_path @smoke
Scenario: Release date is formatted correctly

    Given I go to a dataset landing page
    Then I can see the release date is formatted

@web @datasets @happy_path @smoke
Scenario: View the dataset's metadata

    Given I go to a dataset landing page
    Then I can see the a table of contents for all metadata
    When I click a link for a metadata heading
    Then I am scrolled to that metadata section

# @web @datasets @happy_path @smoke
# Scenario: Dimensions with more than 50 values are shortened

#     Given I go to a dataset landing page

# @web @datasets @happy_path @smoke
# Scenario: Dimensions with 10 - 50 values show 10 and allow me to see the rest if I choose

#     Given I go to a dataset landing page

# @web @datasets @happy_path @smoke
# Scenario: Show all values for dimensions with less than 10 values

#     Given I go to a dataset landing page