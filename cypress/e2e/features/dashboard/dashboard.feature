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

   Scenario Outline: Verify pie chart visibility for Test Coverage
    Given I visit the Home page
    When I click on Dashboard Home
    And I open the Test Coverage Widget
    Then I should see the pie chart for "<status>"

    Examples:
      | status         |
      | Covered        |
      | Not Covered    |
      | Not Applicable |

     Scenario Outline: Verify pie chart visibility for Automation coverage
    Given I visit the Home page
    When I click on Dashboard Home
    And I open the Automation Coverage Widget
    Then I should see the pie chart for "<status>"

    Examples:
      | status         |
      | Automated      |
      | Not Automated  |

   Scenario Outline: Verify LOB for Defect By trend
    Given I visit the Home page
    When I click on Dashboard Home
    And I open the Defect By trend Widget
    Then I should see LOB for Defect By trend

  Scenario Outline: Verify Team section in LOB
    Given I visit the Home page
    When I click on Dashboard Home
    And I open LOB of Defect By trend Widget
    Then I should see Team section

  Scenario Outline: Verify Expand & collapse functionality for team section
    Given I am on Team Section In LOB
    And I click on expand button widget get expanded
    And I click on collapse button Widget get collapsed

  Scenario Outline: Verify Values In Pie Chart
    Given I visit the Home page
    When I click on Dashboard Home
    Then I should see the pie chart for "<status>"

    Examples:
      | status        |
      | PASS          |
      | FAIL          |
      | PENDING       |
      | SKIPPED       |

Scenario Outline: visit profile page
    Given I click on profile page
    Then I should see profile page

Scenario Outline: verify all data for profile page
     Given I click on profile page
     Then I should see profile page
     And I should see basic information of user 
  
Scenario Outline: verify purging functionality
      Given I click on profile page
      Then I click on purging

Scenario Outline: verify purging options
      Given I click on profile page
      When I click on purging
      Then I can see three "<purging options>"
  Examples:
  | purging options     |
  | Time Based Purging  |
  | Limit Based Purging |
  | On-Demand Purging   |


