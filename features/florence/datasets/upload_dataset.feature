Feature: Upload a dataset

Users can upload a CSV to create a new dataset instance

@florence @datasets @happy_path @smoke
Scenario: Navigate through to upload a new file page

    Given I go to the datasets page
    When I select upload a dataset
    Then I am navigated to the upload a dataset page
    When I select to upload a new CPI COICOP version
    Then I am navigated to the upload a new file page

@florence @datasets @happy_path @smoke
Scenario: Upload a CPI COICOP CSV

    Given I go to the upload a dataset page
    When I select to upload a new CPI COICOP version
    Then I am navigated to the upload a new file page
    When I select to upload a CPI COICOP file
    Then I am shown a link to the file once it is uploaded
    When I select Save and continue on the file upload page
    Then I am navigated to the Dataset upload details page
    When I select the time series edition
    Then I click submit for publishing
    And my CPI COICOP import is completed

