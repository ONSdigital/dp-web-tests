Feature: Login happy path

Users should be able to access the rest of Florence by entering a correct email address and password on the login screen.

@florence @login @happy_path
Scenario: Submit correct email and password

    Given I am on the login page
    When I log in
    Then I should see the collections screen
    Then I log out

@florence @login @happy_path
Scenario: Redirect on successful login

    Given I go to the teams screen
    Then I get redirected to the login screen
    When I log in
    Then I should see the teams screen
    Then I log out