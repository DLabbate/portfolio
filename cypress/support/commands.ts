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
 * @link https://www.browserstack.com/guide/how-to-find-broken-links-in-cypress
 */
Cypress.Commands.add("getAllLinks", () => {
  const links = new Set<string>();

  return cy.get("a").each((a) => {
    const url = a.prop("href");

    // If we have already checked the url, skip
    if (links.has(url)) return;

    cy.request({
      url,
      failOnStatusCode: false,
    }).then((response) => {
      if (!response.isOkStatusCode) {
        cy.task("log", `Status ${response.status} for url: ${url}`);
      }

      links.add(url);
    });
  });
});
