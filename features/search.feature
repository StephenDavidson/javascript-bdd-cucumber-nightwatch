Feature: Search

  Scenario: User would like to search for a topic
    Given I visit the home page
    When I search for "Apples"
    Then the first search result should be visible
