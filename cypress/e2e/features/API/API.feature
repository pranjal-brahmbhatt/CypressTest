Feature: API Testing

  Scenario: Verify Email Verification API
    When I send a "POST" request to "/auth/email-verification"
    Then the response status should be 200

  Scenario: Verify Forgot Password API
    When I send a "PUT" request to "/auth/forgot-password"
    Then the response status should be 200

  Scenario: Get User Profile
    When I send a "GET" request to "/auth/get-profile"
    Then the response status should be 200

  Scenario: Logout User
    When I send a GET request to "/auth/logout" with authorization token
    Then the response status should be 200

  Scenario: Sign in User
    When I send a POST request to "/auth/signin?isStripeNeeded=true&byoc=false" with valid credentials
    Then the response status should be 200

   Scenario: Get Sign-in Status
    When I send a "GET" request to "/auth/signin-status"
    Then the response status should be 200

  Scenario: Update Sign-in Status
    When I send a "PUT" request to "/auth/signin-status" with body:
      """
      {
        "status": "signed-in"
      }
      """
    Then the response status should be 200

  Scenario: Sign Up User
    When I send a "POST" request to "/auth/signup" with body:
      """
      {
        "username": "your_username",
        "password": "your_password"
      }
      """
    Then the response status should be 200

  Scenario: Update Password
    When I send a "PUT" request to "/auth/update-password" with body:
      """
      {
        "password": "new_password"
      }
      """
    Then the response status should be 200

  Scenario: Update Profile
    When I send a "POST" request to "/auth/update-profile" with body:
      """
      {
        "name": "new_name",
        "email": "new_email@example.com"
      }
      """
    Then the response status should be 200

   Scenario: Contact Us API
    When I send a "POST" request to "/contact-us" with body:
      """
      {
        "name": "John",
        "email": "john@example.com",
        "message": "Hello"
      }
      """
    Then the response status should be 200

  Scenario: Get Add Card API
    When I send a "GET" request to "/plans/add-card"
    Then the response status should be 200

  Scenario: Get All Plans API
    When I send a "GET" request to "/plans/all-plans"
    Then the response status should be 200

  Scenario: Cancel Subscription API
    When I send a "PUT" request to "/plans/cancel-subscription" with body:
      """
      {
        "subscriptionId": "12345"
      }
      """
    Then the response status should be 200

  Scenario: Change Plan API
    When I send a "GET" request to "/plans/change-plan"
    Then the response status should be 200

  Scenario: Verify Current Plan API
    When I send a "GET" request to "/plans/current-plan"
    Then the response status should be 200

  Scenario: Verify Get Checkout Details API
    When I send a "GET" request to "/plans/get-checkout-details"
    Then the response status should be 200

  Scenario: Verify Get Details API
    When I send a GET request to "/plans/get-details" with authorization token
    Then the response status should be 200

  Scenario: Verify Payment Method API
    When I send a "POST" request to "/plans/payment-method"
    Then the response status should be 200

  Scenario: Verify Update Plan API
    When I send a "PUT" request to "/plans/update-plan"
    Then the response status should be 200

  Scenario: Verify Project List API
    When I send a "GET" request to "/project-list"
    Then the response status should be 200

  Scenario: Verify Add Project API
    When I send a "POST" request to "/projects/add-project"
    Then the response status should be 200

  Scenario: Verify Get Projects API
    When I send a "GET" request to "/projects/get-projects"
    Then the response status should be 200

  Scenario: Verify Get Project by ID API
    When I send a "GET" request to "/projects/{project_id}" with path param "project_id" as "your-project-id"
    Then the response status should be 200

  Scenario: Verify Post Project API
    When I send a "POST" request to "/projects/{project_id}" with path param "project_id" as "your-project-id"
    Then the response status should be 200

  Scenario: Verify Get Audit Logs API
    When I send a "GET" request to "/projects/{project_id}/audit-logs" with path param "project_id" as "your-project-id"
    Then the response status should be 200

  Scenario: Verify Change Status API
    When I send a "PUT" request to "/projects/{project_id}/change-status" with path param "project_id" as "your-project-id"
    Then the response status should be 200

  Scenario: Verify Purge API (GET, POST, PUT)
    When I send a "GET" request to "/purge"
    Then the response status should be 200
    When I send a "POST" request to "/purge"
    Then the response status should be 200
    When I send a "PUT" request to "/purge"
    Then the response status should be 200

  Scenario: Verify Purge Now API
    When I send a "POST" request to "/purge-now"
    Then the response status should be 200


