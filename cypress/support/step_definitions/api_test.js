const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
When("I send a {string} request to {string}", (method, endpoint) => {
    cy.request({
      method: method,
      url: Cypress.env("apiBaseUrl") + endpoint, 
      headers: { "Content-Type": "application/json" },
    }).as("apiResponse");
  });
  
  Then("the response status should be {int}", (statusCode) => {
    cy.get("@apiResponse").its("status").should("eq", statusCode);
  });

  When("I send a GET request to {string} with authorization token", (endpoint) => {
    cy.request({
      method: "GET",
      url: Cypress.env("apiBaseUrl") + endpoint,
      headers: {
        "Content-Type": "application/json",
     },
    }).then((response) => {
        cy.wrap(response).as("apiResponse"); 
    });
  });

  When("I send a POST request to {string} with valid credentials", (endpoint) => {
    cy.request({
      method: "POST",
      url: Cypress.env("apiBaseUrl") + endpoint,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: "test@example.com",
        password: "password123",
      },
    }).then((response) => {
        cy.wrap(response).as("apiResponse"); 
    });
  });

  When("I send a {string} request to {string} with body:", (method, endpoint, body) => {
    cy.request({
      method,
      url: Cypress.env("apiBaseUrl") + endpoint,
      body: JSON.parse(body),
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).as("apiResponse");
  });

  When("I send a {string} request to {string} with path param {string} as {string}", (method, endpoint, param, value) => {
    cy.request({
      method,
      url: Cypress.env("apiBaseUrl") + endpoint.replace(`{${param}}`, value),
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).as("apiResponse");
  });

