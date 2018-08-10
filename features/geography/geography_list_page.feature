Feature: list page for a version of geography

User can decide whether this is the correct geography

@geography @happy_path @smoke
Scenario: View the geography list page

     Given I go to a geography list page
     Then I can see the geography list 'Area Types' dimension
     Then I can go to the Statistics page

