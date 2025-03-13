// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("the user is logged in", () => {
//   // cy.login();
// });

// Then('the {string} should be visible', (text) => {
//   cy.contains(text).should("be.visible");
// });

// When("the user clicks on the Dashboard home button", () => {
//   // cy.location("href").should("eq", "https://dashboard-test-iaac.digy4.com/home");
//   cy.contains("Universal Enterprise Quality Engineering Dashboard").click();
// });

// When("the user clicks on the DASHBOARDS button", () => {
//   cy.url().should('include', '/home');
//   cy.get("div:nth-of-type(3) div.css-wb85ar > div:nth-of-type(2) svg")
//   .should("be.visible")
//   .click();
// });

// When("the user clicks on the CXO Dashboard button", () => {
//   cy.get('button').contains("CXO Dashboard").click();
// });

// Then("the CXO Dashboard should be displayed", () => {
//   cy.get('.chakra-heading.css-107ng0r').should("be.visible");
// });

// When("the user clicks on the day from the dropdown", () => {
//   cy.get(".select__input-container").click(); 
//   cy.wait(500); 
//   cy.get('[data-index="3"]').click({ force: true });
//   // cy.contains("p", day).should("be.visible").click({ force: true });

//   // cy.get(".select__input-container").click();
//   // cy.contains("p", day).click();
// });

// Then("the user able to see widgets on Dashboard", () => {
//   cy.wait(2000); 
//   cy.contains("TQACXO").should("be.visible");
// });


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  // cy.login();
});

Then("I should see {string} on the page", (text) => {
  cy.contains(text).should("be.visible");
});

When("I click on Dashboard Home", () => {
  cy.xpath("//a[@href='/home']").click();
});

When("I click on Dashboards button", () => {
  cy.xpath("//button[contains(text(),'DASHBOARDS')]").click();
});

When("I click on CXO Dashboard", () => {
  cy.xpath("//button[normalize-space()='CXO Dashboard']").click();
});

Then("I should be on the CXO Dashboard page", () => {
  cy.url().should("include", "/dashboard/cxo");
});

When("I expand a widget", () => {
  cy.get('img[alt="expand"]').first().click();
});

Then("The widget should be expanded", () => {
  cy.get('img[alt="collapse"]').first().should("be.visible");
});

When("I collapse the widget", () => {
  cy.get('img[alt="collapse"]').first().click();
});

Then("The widget should be collapsed", () => {
  cy.get('img[alt="expand"]').first().should("be.visible");
});

