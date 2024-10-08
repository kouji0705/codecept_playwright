Feature: Google Search

  Scenario: Google検索を実施する
    Given I am on the Google search page
    When I fill in the search box with "CodeceptJS"
    And I press Enter
    Then I see "CodeceptJS" in the results