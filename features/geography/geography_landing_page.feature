Feature: Landing page for a version of geography

User can decide whether this is the correct geography

@geography @happy_path @smoke
Scenario: View the geography landing page

     Given I go to a geography landing page
     Then I can see the 'Area Types' dimension
     Then I can go to the 'Area Types' geography list page

