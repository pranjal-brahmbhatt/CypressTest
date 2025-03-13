Feature: Dashboard Functionality

  Scenario: Verify Digy4 Apps on the page
    Given I visit the login page
    Then I should see "Digy4 Apps" on the page

  Scenario: Navigate to CXO Dashboard
    Given I visit the login page
    When I click on Dashboard Home
    And I click on Dashboards button
    And I click on CXO Dashboard
    Then I should be on the CXO Dashboard page

  # Scenario: Verify expand and collapse functionality of widgets
  #   Given I visit the login page
  #   When I click on Dashboard Home
  #   And I expand a widget
  #   Then The widget should be expanded
  #   When I collapse the widget
  #   Then The widget should be collapsed


  # Scenario Outline: Viewing widgets
  #   Given the user is logged in
  #   When the user clicks on the Dashboard home button
  #   And the user clicks on the day from the dropdown
  #   Then the user able to see widgets on Dashboard



