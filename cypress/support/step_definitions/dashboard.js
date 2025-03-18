import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

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

When('I select {string} from the dropdown', () => {
  cy.get(".select__input-container").click();
  cy.wait(500);
  cy.get('[data-index="5"]').click({ force: true });
  // cy.xpath(`//p[normalize-space()='${day}']`, { timeout: 10000 }).should('be.visible').click();
});

When("the user clicks on the day from the dropdown", () => {
  cy.get(".select__input-container").click(); 
  cy.wait(500); 
  cy.get('[data-index="3"]').click({ force: true });
  // cy.contains("p", day).should("be.visible").click({ force: true });

  // cy.get(".select__input-container").click();
  // cy.contains("p", day).click();
});

Then("I verify the widgets are visible",() =>{
  cy.xpath("//div[@class='css-1ikrpfh']//div[@class='css-gmuwbf']")
  .should("exist")
  .should("be.visible");

});

Then("the user able to see widgets on Dashboard", () => {
  cy.wait(2000); 
  cy.contains("TQACXO").should("be.visible");
});

Given("I visit the Home page", () => {
  cy.xpath(`//div[@class='css-wqj460']`);
  // cy.login();
});

Then("I should see {string} on the page", (text) => {
  cy.contains(text).should("be.visible");
});

When("I click on Dashboard Home", () => {
 // cy.contains("Universal Enterprise Quality Engineering Dashboard").click();
  cy.xpath(`//a[@href='/home']`).click();
});

When("I click on Dashboards button", () => {
  // cy.xpath("//button[contains(text(),'DASHBOARDS')]").click();
  cy.url().should('include', '/home');
  cy.get('button').contains("DASHBOARDS")
  .should("be.visible")
  .click();
});

When("I click on CXO Dashboard", () => {
  cy.get('button').contains("CXO Dashboard").click();
  // cy.xpath("//button[normalize-space()='CXO Dashboard']").click();
});

Then("I should be on the CXO Dashboard page", () => {
  cy.url().should("include", "/cxo-dashboard?");
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

When("I open the Test Coverage Widget", () => {
  cy.get('b').contains("Test Coverage").click();
});

Then("I should see the pie chart for {string}", (browserName) => {
  cy.xpath(`//div[contains(@class, 'css-0')][normalize-space()='${browserName}']`).should("be.visible");

});

Given("I am on the Dashboard page",() =>{
  cy.xpath(`//a[@href='/home']`).click();
});

When("I click on the full-screen icon", () => {
  cy.get('img[alt="expand"]').first().click();
});

Then("the dashboard should enter full-screen mode", () => {
  cy.xpath(`//body/div[@id='__next']`);
});

When("I click on the full-screen icon again",() =>{
  cy.get('img[alt="expand"]').click();
});

Then("the dashboard should exit full-screen mode", () => {
  cy.get("body").should("not.have.class", "css-hboir5");
});