Feature: Search

  Scenario: User would like to search for a topic
    Given I visit the home page
    When I search for test
    Then I should be on the results page
    And the first search result should be visible