Feature: Login failures

User fails to log in (for various reasons)

@florence @login @failure 
Scenario: Don't enter an email and password I stay on the login page

    Given I am on the login page
    When I log in without entering any credentials
    Then I stay on the login page

@florence @login @failure
Scenario: Don't enter an email and password I can't access other Florence screens

    Given I am on the login page
    When I log in without entering any credentials
    When I go to the teams screen
    Then I stay on the login page