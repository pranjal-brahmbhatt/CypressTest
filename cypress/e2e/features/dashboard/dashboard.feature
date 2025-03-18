Feature: Dashboard Functionality

  Scenario: Verify Digy4 Apps on the page
    Given I visit the Home page
    Then I should see "Digy4 Apps" on the page

  Scenario: Navigate to CXO Dashboard
    Given I visit the Home page
    When I click on Dashboard Home
    And I click on Dashboards button
    And I click on CXO Dashboard
    Then I should be on the CXO Dashboard page

   Scenario: Verify Test Coverage Widget
    Given I visit the Home page
    When I click on Dashboard Home
    And I click on Dashboards button
    Then I open the Test Coverage Widget

  Scenario: Verify expand and collapse functionality of widgets
    Given I visit the Home page
    When I click on Dashboard Home
    And I expand a widget
    Then The widget should be expanded
    When I collapse the widget
    Then The widget should be collapsed

Scenario: Select a Day from Dropdown
    Given I visit the Home page
    When I click on Dashboard Home
    And I select "Last 3 days" from the dropdown

 Scenario: Verify Widgets on Dashboard
    Given I visit the Home page
    When I click on Dashboard Home
    Then I verify the widgets are visible

  Scenario Outline: Viewing widgets
    Given I visit the Home page
    When I click on Dashboard Home
    And the user clicks on the day from the dropdown
    Then the user able to see widgets on Dashboard

   Scenario Outline: Verify pie chart visibility for different test statuses
    Given I visit the Home page
    When I click on Dashboard Home
    When I open the Test Coverage Widget
    Then I should see the pie chart for "<status>"

    Examples:
      | status         |
      | Covered        |
      | Not Covered    |
      | Not Applicable |

  Scenario Outline: Toggle Full-Screen Mode
    Given I am on the Dashboard page
    When I click on the full-screen icon
    Then the dashboard should enter full-screen mode
    When I click on the full-screen icon again
    Then the dashboard should exit full-screen mode




