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

Cypress.Commands.add("getAllLinks", () => {
  return cy
    .get("a")
    .filter(":not([href*='linkedin'])") // linkedin does not allow direct access
    .each((a) => {
      cy.request(a.prop("href"));
    });
});
