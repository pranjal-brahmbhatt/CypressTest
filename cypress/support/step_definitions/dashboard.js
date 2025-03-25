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

When("I open the Automation Coverage Widget", () => {
  cy.xpath(`//b[normalize-space()='Automation Coverage']`).click();
});

When("I open the Defect By trend Widget", () => {
  cy.xpath(`//b[normalize-space()='Defect By Trend']`).click();
});

Then("I should see the pie chart for {string}", (browserName) => {
  cy.xpath(`//div[contains(@class, 'css-0')][normalize-space()='${browserName}']`).should("be.visible");
});

Then("I should see LOB for Defect By trend", () => {
  cy.xpath(`//p[normalize-space()='Line of Business']`).should("be.visible");
});

When("I open LOB of Defect By trend Widget", () => {
  cy.xpath(`//b[normalize-space()='Defect By Trend']`).click();
  cy.xpath(`//div[@class='css-644kgd']//div[@class='css-xfeben']`).click();
});

Then("I should see Team section", () => {
  cy.xpath(`//p[normalize-space()='Team']`).should("be.visible");
});

Given("I am on Team Section In LOB",() =>{
  cy.xpath(`//a[@href='/home']`).click();
  cy.get('button').contains("DASHBOARDS")
  .should("be.visible")
  .click();
  cy.xpath(`//b[normalize-space()='Defect By Trend']`).click();
  cy.xpath(`//div[@class='css-644kgd']//div[@class='css-xfeben']`).click();
  cy.xpath(`//p[normalize-space()='Team']`).should("be.visible");
});

When("I click on expand button widget get expanded", () => {
  cy.get('img[alt="expand"]').first().click();
});

When("I click on collapse button Widget get collapsed", () => {
  cy.get('img[alt="collapse"]').first().click();
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

Given("I click on profile page",() =>{
  cy.xpath(`//img[@class='chakra-image css-4g6ai3']`).click();
  cy.xpath("//button[contains(@id, 'menu-list')]").first().click();
});

Then("I should see profile page", () => {
  cy.get('p').contains("General").should("be.visible");
});

Then("I should see basic information of user", () => {
  cy.get('p').contains("First Name").should("be.visible");
  cy.get('p').contains("User Name").should("be.visible");
  cy.get('p').contains("Last Name").should("be.visible");
  cy.get('p').contains("Organization Name").should("be.visible");
});

Then("I click on purging", () => {
  cy.xpath("//button[contains(@id, 'accordion-button-')]//div[@class='css-1rb7kdn' and normalize-space()='Purging']")
  .click();
});

Then("I can see three {string}", (purgingOption) => {  
  cy.xpath(`//p[normalize-space()='${purgingOption}']`).should("be.visible");
});
