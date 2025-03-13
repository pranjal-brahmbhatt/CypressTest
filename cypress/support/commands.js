// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.session('userSession', () => {  
    cy.visit("https://dashboard-test-iaac.digy4.com/auth/login");

    // Wait for the login page to load
    cy.get("[data-testid='userName']", { timeout: 10000 }).should('be.visible');

    // Enter credentials
    cy.get("[data-testid='userName']").type("pranjal.brahmbhatt");
    cy.get("[data-testid='password']").type("Digy4101!");
    cy.get("[data-testid='loginButton']").click();

    // Ensure login is successful by waiting for dashboard to appear
    cy.get(".chakra-image.css-1ywmljq", { timeout: 15000 }).should("be.visible");
  });
});

  