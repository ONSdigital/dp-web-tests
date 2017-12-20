Feature: Landing page for a version of dataset

User can decide whether this is the correct dataset, using the metadat and can access the dataset filtering screens and whole download files

@web @datasets @happy_path @smoke
Scenario: View the dataset description

     Given I go to a dataset landing page
     Then I can see the description for the dataset

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
Scenario: Release frequency is displayed

    Given I go to a dataset landing page
    Then I can see the release frequency is displayed

@web @datasets @happy_path @smoke
Scenario: Next release date is formatted correctly

    Given I go to a dataset landing page
    Then I can see the next release date is formatted

@web @datasets @happy_path @smoke
Scenario: View the dataset's metadata

    Given I go to a dataset landing page
    Then I can see the a table of contents for all metadata
    When I click a link for a metadata heading
    Then I am scrolled to that metadata section

@web @datasets @happy_path @smoke
Scenario: View the metadata description

    Given I go to a dataset landing page
    Then I can see the 'Goods and Services' dimension
    When I click the 'Learn more' link
    Then I can see the metadata description for the dimension

@web @datasets @happy_path @smoke
Scenario: Dimensions with more than 50 values are shortened to show 10

     Given I go to a dataset landing page
     Then I can see the 'Goods and Services' dimension
     Then I can see '10' dimension options are visible
     Then I am shown there are '127' more options

@web @datasets @happy_path @smoke
Scenario: Dimensions with 10 - 50 values show 10 and allow me to see the rest if I choose

    Given I go to a dataset landing page
    Then I can see the 'Geographic Areas' dimension
    Then only '10' dimension options are visible
    When I click the 'Show all' link
    Then all '12' dimension options are visible

@web @datasets @happy_path @smoke
Scenario: Latest changes are displayed

    Given I go to a dataset landing page
    Then I can see the 'What has changed in this edition' section
    Then I can see the change title
    Then I can see the change description

@web @datasets @happy_path @smoke
Scenario: View QMI information

    Given I go to a dataset landing page
    Then I can see the 'Quality and methodology information' section
    When I click the link to view more QMI information
    Then I am taken to the QMI page for the dataset

@web @datasets @happy_path @smoke
Scenario: View license information

    Given I go to a dataset landing page
    Then I can see the 'Usage information' section
    Then I can see the license text

@web @datasets @happy_path @smoke
Scenario: Download methodology information

    Given I go to a dataset landing page
    Then I can see the 'Methodologies' section
    Then I can see the methodology download

@web @datasets @happy_path @smoke
Scenario: Access previous versions

     Given I go to a dataset landing page
     Then I can see the 'Previous Versions' are available
     When I click the link to view previous versions
     Then I am navigated to the 'Previous versions' page

@web @datasets @happy_path @smoke
Scenario: Contact information is displayed correctly

   Given I go to a dataset landing page
   Then I can see the contact details for the dataset

@web @datasets @happy_path @smoke
Scenario: I can view a related publication

    Given I go to a dataset landing page
    Then I can see the 'Related publications' are available
    When I click the link to view a related publication
    Then I am navigated to the related publication

@web @datasets @happy_path @smoke
Scenario: I can view a related dataset

    Given I go to a dataset landing page
    Then I can see the 'Related datasets' are available
    When I click the link to view a related dataset
    Then I am navigated to the related dataset

@web @datasets @happy_path @smoke
Scenario: I can confirm that the dataset is a national statistic

    Given I go to a dataset landing page
    Then I can see the national statistic information

@web @datasets @happy_path @smoke
Scenario: I can return to the normal site via feedback banner

    Given I go to a dataset landing page
    When I click the return to normal service link
    Then I am navigated to the taxonomy landing page
