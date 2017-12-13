Feature: Download options available from filtering

Users can download their filtered file once they are available

@web @preview @datasets @happy_path @smoke
Scenario: Download available for a filtered job

    Given I go to the filter options page
    When I click the first dimension
    Then I can see the first filter page
    Then I check an option
    When I save my selection(s)
    When I click the second dimension
    Then I can see the second filter page
    When I select the 'latest date' option
    Then I can see that the 'latest date' option is checked
    When I save my selection(s)
    Then I click to preview and download
    Then I can see the preview and download page
    And I can see the correct preview and download contents

@web @preview @datasets @happy_path @smoke
Scenario: Can navigate to adjust filter options from download page

    Given I go to the preview and download page
    When I click adjust filter options
    Then I am navigated to the filter options page

@web @preview @datasets @happy_path @smoke
Scenario: Can navigate to dataset landing page from download page

    Given I go to the preview and download page
    When I click the dataset page link
    Then I am navigated to the dataset landing page