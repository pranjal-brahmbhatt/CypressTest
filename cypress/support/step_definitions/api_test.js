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
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0biI6ImV5SnJhV1FpT2lKbFpFVlFZa1YwV0c5bFV6Rm5lRFpGVkZBMVNVVk5ZMGhqWldKUFdVNXVNemswU2sxS1IzWmhORXh2UFNJc0ltRnNaeUk2SWxKVE1qVTJJbjAuZXlKemRXSWlPaUkyWW1JeFpqZGlaUzB4WkdFd0xUUmtZekF0WVdNMU5DMHdOakV3Wm1Ga05HUTVNR0lpTENKcGMzTWlPaUpvZEhSd2N6cGNMMXd2WTI5bmJtbDBieTFwWkhBdWRYTXRaV0Z6ZEMweExtRnRZWHB2Ym1GM2N5NWpiMjFjTDNWekxXVmhjM1F0TVY5Q2NtRlBVM05sZW00aUxDSmpiR2xsYm5SZmFXUWlPaUl5Y1dGaGRURjJOblJoYnpGamRHcHpaMnQyWkdweU9EQnJZeUlzSW05eWFXZHBibDlxZEdraU9pSXdaV0ZrTnpSbU5TMHpaV1ZrTFRSbU1qY3RZbUUwTkMwMk5HVXpOR0kzTUdRNU56UWlMQ0psZG1WdWRGOXBaQ0k2SWpWalptSXdZVEk0TFdVME16RXROR05tWmkxaVpEQTBMVFF3T1dZMllUQmlObVptT0NJc0luUnZhMlZ1WDNWelpTSTZJbUZqWTJWemN5SXNJbk5qYjNCbElqb2lZWGR6TG1OdloyNXBkRzh1YzJsbmJtbHVMblZ6WlhJdVlXUnRhVzRpTENKaGRYUm9YM1JwYldVaU9qRTJPVFV6TkRjd056QXNJbVY0Y0NJNk1UWTVOVE0xTURZM01Dd2lhV0YwSWpveE5qazFNelEzTURjd0xDSnFkR2tpT2lJM1pqY3pPR0prTlMwNU5UTTJMVFEzTTJRdFlUTXdPQzFtTlRobU1EQXpObVl6WWpZaUxDSjFjMlZ5Ym1GdFpTSTZJbUZ5WVdkaGRtRnVkWE5sWVhOME1pSjkuR3p0NmFDcUxPTGZ4VF93cGl5b25tYkdsZGhESlFoNzlYYU5NdmlPYWt1dzZxUEVIbzFSanUxdG1oSG91TWRuRFh0VmhqVFpSS3hCN3MzMGFSNm9LTk05cm9BR1pzM1A5dTBNbldGSVB1T2dNS1hiaS1GVldmWVUtcG5Kb3J6THVxdDUxMW03Q3BrUEFzMFU2SGYxWnJXdk9OVzJya0NSODlxc3RSMXhKTTUyU0E1ZzlhbFBiXy1KN3FNU2p1d1Z2OFI5cGdaMDVFeEVWdnJhNmxBX2tYcEhPZXhRa3lpeDBpUGJHUnJ2UzJCdmk4enloUmt2RmhsdnM5SlNSemRURV96WktGUGNSYWc3UUx3c0Q2WFhaQWF0MFIxN2tzRnpDR3lDWXVhbU91ZVhVRlUxNHFCbGUxdV9SUHNoT2pxb2x2dFBZRXJSbENqMkVpbVdtTnRlTU5BIiwicmlkIjoiN2MzZjA2NGItNDgzZi00M2M4LWE2NDgtOGMzZjQwN2EzNmU0IiwicGVyIjpbInVzZXIuY3JlYXRlIiwidXNlci5hY3RpdmF0ZSIsInVzZXIuZGVhY3RpdmF0ZSIsInVzZXIubGlzdC5hdWRpdHRyYWlsLnZpZXciLCJ1c2VyLmxpc3QudmlldyIsInVzZXIubGlzdC5hc3NpZ25lZHByb2plY3QudmlldyIsInVzZXIudXBkYXRlIiwidXNlci5saXN0LmZpbHRlciIsInVzZXIucHJvZmlsZS52aWV3IiwidXNlci5wcm9maWxlLnBhc3N3b3JkLnVwZGF0ZSIsInVzZXIucHJvZmlsZS51cGRhdGUiLCJ1c2VyLnByb2ZpbGUudmlldyIsInVzZXIucHJvZmlsZS5wYXNzd29yZC51cGRhdGUiLCJ1c2VyLnByb2ZpbGUudXBkYXRlIiwidXNlci5wcm9qZWN0LmFkZCIsInVzZXIucHJvamVjdC5lZGl0IiwidXNlci51c2VycGxhbi5hZGQiLCJ1c2VyLnVzZXJwbGFuLnZpZXciLCJ1c2VyLnBsYW4udmlldyIsInVzZXIucGxhbi51cGRhdGUiLCJ1c2VyLmNhcmQudXBkYXRlIiwidXNlci5jYXJkLnZpZXciLCJ1c2VyLnBsYW4udmlldyIsInVzZXIucGxhbi5jYW5jZWwiLCJ1c2VyLnBsYW4ubGlzdC52aWV3IiwidXNlci5wbGFuLmxpc3QudXBkYXRlIiwicHJvamVjdC5jcmVhdGUiLCJwcm9qZWN0LmFjdGl2YXRlIiwicHJvamVjdC5kZWFjdGl2YXRlIiwicHJvamVjdC5saXN0LmF1ZGl0dHJhaWwudmlldyIsInByb2plY3QubGlzdC52aWV3IiwicHJvamVjdC5saXN0LmFzc2lnbmVkcHJvamVjdC52aWV3IiwicHJvamVjdC51cGRhdGUiLCJwcm9qZWN0Lmxpc3QuZmlsdGVyIiwidXNlci5yb2xlLnVwZGF0ZSIsImFjY2Vzcy5vcmcuYWRtaW4uYWxsb3ciLCJhY2Nlc3MucHJvamVjdC5yb2xlLmFsbG93IiwicHJvamVjdC52aWV3IiwidXNlci52aWV3IiwidXNlci5wdXJnZS5hZGQiLCJ1c2VyLnB1cmdlLnZpZXciLCJ1c2VyLnB1cmdlLnVwZGF0ZSJdLCJvcmciOnsicGxhbl9pZCI6InByb2RfTzRlOVRland6NE5hMHEiLCJzdWJzY3JpcHRpb25faWQiOiJzdWJfMU5xeG1aRndjUTFJSW5jV09qeTZmOHBxIiwic3RhdHVzIjoiYWN0aXZlIiwicm9vdF91c2VyIjoiM2M2YjJmN2YtYTQwNi00NjBmLThmNTgtYzgyMzgyZDZmMWEwIiwiaWQiOiJiNWU4MDRmYi0wNmY0LTQ2MGItOTc4Zi1kNjI1MzZiMDhjZTMiLCJuYW1lIjoiZGlneTR1c2Vhc3QxdGVzdGVudjUiLCJzdHJpcGVfY3VzdG9tZXJfaWQiOiJjdXNfT2NKek5XWmlrWHhzd1EiLCJ0eXBlIjoiZW50ZXJwcmlzZSJ9LCJ1c3IiOnsib3JnYW5pemF0aW9uX2lkIjoiYjVlODA0ZmItMDZmNC00NjBiLTk3OGYtZDYyNTM2YjA4Y2UzIiwic3RhdHVzIjoiYWN0aXZhdGUiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTExVDA4OjE3OjEzLjkyOVoiLCJlbWFpbCI6ImFkbWluQGRpZ3k0LmNvbSIsImxvZ2luX2F0dGVtcHRzIjowLCJsYXN0X25hbWUiOiJyYWdhdmFuIiwiZmlyc3RfbmFtZSI6ImFtYmlnaGFuYW50aGFuIiwidXNlcm5hbWUiOiJhcmFnYXZhbnVzZWFzdDIiLCJpZCI6IjNjNmIyZjdmLWE0MDYtNDYwZi04ZjU4LWM4MjM4MmQ2ZjFhMCIsInJlbWVtYmVyX3Rva2VuIjoiIn0sInN1YiI6eyJzdGF0dXMiOiJhY3RpdmUiLCJtZXRhZGF0YSI6eyJkZXBlbmRlbnRfcGxhbiI6ImVudGVycHJpc2VfZGlneTRfdWx0cmEiLCJkZXBlbmRlbnRfcGxhbl9pZCI6InByb2RfTzdlSHR1ZzhjbWdkbTEiLCJkaXNjb3VudCI6IjI1IiwiZmVhdHVyZXMiOiJVbml2ZXJzYWwgUmVwb3J0aW5nIE11bHRpcGxlIFRvb2xzIGFuZCBGcmFtZXdvcmssVW5pdmVyc2FsIExvZyBDYXB0dXJlLFNjcmVlbnNob3QsIFZpZGVvcywgSGlzdG9yaWNhbCBUcmVuZCxUZXN0IERldGFpbHMgVmlldywgTWFuYWdlbWVudCBWaWV3LEZpbHRlcnMsICBQdXJnaW5nLCBDdXN0b20gVmlldyxVc2VyIEFkbWluaXN0cmF0aW9uLFJlcG9ydCBEb3dubG9hZCIsImlzRnJlZVRyaWFsIjoidHJ1ZSIsIm5ld1Byb2R1Y3RJZCI6InByb2RfT2VHSklEeUFLRktFVm0iLCJwbGFuX3R5cGUiOiJlbnRlcnByaXNlIiwicHJldlN1YnNjcmlwdGlvbklkIjoic3ViXzFOcDVMUkZ3Y1ExSUluY1d1bkxBdnJXMCIsInByb21vdGlvbl9wcmljZSI6IjY3NDAwIiwidGVzdGNhc2VfY291bnQiOiIxMDAwMCIsInR5cGUiOiJTeXN0ZW0gZ2VuZXJhdGVkIHBsYW4iLCJ1cGRhdGVQbGFuIjoidHJ1ZSIsInVzZXJfY29zdCI6IjMwMDAiLCJ1c2VyX2NvdW50IjoiMyJ9fSwiaWF0IjoxNjk1MzQ3MDcxfQ.x8KubaZCDnvIo7cix8vU7QqqshLkMA7gZwbJunqUXHo",
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
        Authorization: "Basic b2JzZXJ2YWJpbGl0eTpEaWd5NDEwMSE=", 
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

