Feature: List dataset editions

Users can see all available editions for a dataset and access them from a single page.

@web @datasets @happy_path @smoke
Scenario: Access an edition page from the editions list page

    Given I am on a dataset editions page
    When I click an edition
    Then I can see that I've navigated to that edition's page