/// <reference types="cypress" />
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

/**
 * Gets all links and verifies that none of them are broken.
 */
Cypress.Commands.add("getAllLinks", () => {
  return cy.get("a").each((a) => {
    cy.request({
      url: a.prop("href"),
      failOnStatusCode: false,
    });
  });
});
