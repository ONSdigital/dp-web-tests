Feature: Landing page for a version of geography

User can decide whether this is the correct geography

@geography @happy_path @smoke
Scenario: View the geography landing page

     Given I go to a geography landing page
     Then I can see the 'Area Types' dimension
     Then I can see the description for the 'Area Type id 0'
     Then I can see the description for the 'Area Type id 1'
     Then I can see the description for the 'Area Type id 2'

