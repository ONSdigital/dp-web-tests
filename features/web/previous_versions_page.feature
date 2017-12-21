Feature: Previous versions of a dataset

Users can view previous versions of a dataset and can download each version 

@web @datasets @happy_path @smoke
Scenario: Return to the latest version

    Given I go to the previous versions page
    When I click the latest version link
    Then I can see the latest version page

@web @datasets @happy_path @smoke
Scenario: Learn more about why statistics are revised

    Given I go to the previous versions page
    When I click the learn more link
    Then I can see the information about revisions

@web @datasets @happy_path @smoke
Scenario: Revision date is formatted correctly

    Given I go to the previous versions page
    Then I can see the revision date is formatted


@web @datasets @happy_path @smoke
Scenario: Revision reason contains revision information

    Given I go to the previous versions page
    Then I can see the revision reason is displayed

@web @datasets @happy_path @smoke
Scenario: Download a version in available formats

    Given I go to the previous versions page
    Then I can see the csv file to download
    Then I can see the xls file to download

@web @datasets @happy_path @smoke
Scenario: Download a version in available formats

    Given I go to the previous versions page
    Then I can see the csv file to download
    Then I can see the xls file to download

