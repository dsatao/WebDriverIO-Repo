Feature: Search Functionality on Amazon Home Page

  Scenario Outline: As a user, I can seach amazon home page
    Given I am on the home page
    When I search with <searchText> on home page
    Then I should see a result page with <resultText>

    Examples:
      | searchText   | resultText   |
      | Mens Watches | Mens Watches |
      | Mens Jeans   | Mens Jeans   |
