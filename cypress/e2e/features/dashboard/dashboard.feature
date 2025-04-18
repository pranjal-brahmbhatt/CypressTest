Feature: Dashboard Functionality

#   Scenario: Verify Digy4 Apps on the page
#     Given I visit the Home page
#     Then I should see "Digy4 App" on the page

#   Scenario: Navigate to CXO Dashboard
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I click on Dashboards button
#     And I click on CXO Dashboard
#     Then I should be on the CXO Dashboard page

#    Scenario: Verify Test Coverage Widget
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I click on Dashboards button
#     Then I open the Test Coverage Widget

#   Scenario: Verify expand and collapse functionality of widgets
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I expand a widget
#     Then The widget should be expanded
#     When I collapse the widget
#     Then The widget should be collapsed

# Scenario: Select a Day from Dropdown
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I select "Last 3 days" from the dropdown

#  Scenario: Verify Widgets on Dashboard
#     Given I visit the Home page
#     When I click on Dashboard Home
#     Then I verify the widgets are visible

#   Scenario Outline: Viewing widgets
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And the user clicks on the day from the dropdown
#     Then the user able to see widgets on Dashboard

#    Scenario Outline: Verify pie chart visibility for Test Coverage
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I open the Test Coverage Widget
#     Then I should see the pie chart for "<status>"

#     Examples:
#       | status         |
#       | Covered        |
#       | Not Covered    |
#       | Not Applicable |

#      Scenario Outline: Verify pie chart visibility for Automation coverage
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I open the Automation Coverage Widget
#     Then I should see the pie chart for "<status>"

#     Examples:
#       | status         |
#       | Automated      |
#       | Not Automated  |

#    Scenario Outline: Verify LOB for Defect By trend
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I open the Defect By trend Widget
#     Then I should see LOB for Defect By trend

#   Scenario Outline: Verify Team section in LOB
#     Given I visit the Home page
#     When I click on Dashboard Home
#     And I open LOB of Defect By trend Widget
#     Then I should see Team section

#   Scenario Outline: Verify Expand & collapse functionality for team section
#     Given I am on Team Section In LOB
#     And I click on expand button widget get expanded
#     And I click on collapse button Widget get collapsed

#   Scenario Outline: Verify Values In Pie Chart
#     Given I visit the Home page
#     When I click on Dashboard Home
#     Then I should see the pie chart for "<status>"

#     Examples:
#       | status        |
#       | PASS          |
#       | FAIL          |
#       | PENDING       |
#       | SKIPPED       |

# Scenario Outline: visit profile page
#     Given I click on profile page
#     Then I should see profile page

# Scenario Outline: verify all data for profile page
#      Given I click on profile page
#      Then I should see profile page
#      And I should see basic information of user 
  
# Scenario Outline: verify purging functionality
#       Given I click on profile page
#       Then I click on purging

# Scenario Outline: verify purging options
#       Given I click on profile page
#       When I click on purging
#       Then I can see three "<purging options>"
#   Examples:
#   | purging options     |
#   | Time Based Purging  |
#   | Limit Based Purging |
#   | On-Demand Purging   |

# Scenario Outline: Verify plan limit records
#     Given I click on profile page
#     When I click on purging
#     Then I can see plan limit testCase execution
#     And It must be same in usage section

# Scenario Outline: verify time based purging days selection
#     Given I click on profile page
#     When I click on purging
#     And I click on time Based purging
#     Then I can select "<options>" accordingly
#   Examples:
#     | options |
#     | Days    |
#     | Months  |

# Scenario Outline: validate same values in purging
#       Given I click on profile page
#       When I click on purging
#       And I click on time Based purging
#       Then I can select "<options>" accordingly
#       Then I can see same "<options>" in rest
#     Examples:
#       | options     |
#       | Days        |
#       | Months      |

# Scenario Outline: verify integration page
#       Given I click on integration page
#       Then I Can see "Integration Hub" as a title

# Scenario Outline: validate user section
#       Given I click on integration page
#       When I click On Admin pannel
#       And I click On User Section
#       Then I should be on user section page

# Scenario Outline: Verify search bar in user section
#        Given I click on integration page
#        And I am on user section
#        Then I can change "<search bar selection>" 
#     Examples:
#     |   search bar selection  |
#     |   First Name             |
#     |   Last Name              |
#     |   User Name              |
#     |   Phone                  |

# Scenario Outline: verify serach bar
#       Given I click on integration page
#       And I am on user section
#       Then I can search using search bar

# Scenario Outline: Fine project in search 
#        Given I click on integration page
#        And I am on user section
#        When I enter "project" in search

@smoke
Scenario Outline: view users in admin pannel
        Given I click on integration page
        And I am on user section
        And I can scroll through "<users>"
Examples:
  | users |
  | All Users      |
  | Active Users   |
  | Deactive Users |

@smoke
Scenario Outline: Verify all fields in user
      Given I click on integration page
      And I am on user section
      And I Can see "<All Fields>" for users
  Examples:
     | All Fields  |
     | FIRST NAME   |
     | LAST NAME    |
     | USER NAME    |
     | USER CREATED |
     | USER STATUS  |
     | EMAIL        |
     | PHONE        |
     | COMMENTS     |
