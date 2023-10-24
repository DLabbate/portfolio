/// <reference types="cypress" />
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * This function takes a string query parameter and encodes it for safe use in a URL.
 * Note it replaces spaces with '+', instead of '%20'.

 * @param {string} param - The query parameter to be encoded.
 * @returns {string} The encoded query parameter.
 */
const encodeQueryParam = (param: string): string =>
  encodeURIComponent(param).replace(/%20/g, "+");

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

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

Cypress.Commands.add("setLightMode", () => {
  cy.getBySel("moon-icon").filter(":visible").click();
  cy.get("html").should("have.class", "light");
});

Cypress.Commands.add("setDarkMode", () => {
  cy.getBySel("sun-icon").filter(":visible").click();
  cy.get("html").should("have.class", "dark");
});

Cypress.Commands.add("searchBlogs", (searchQuery) => {
  cy.getBySel("blog-search-input").type(searchQuery);
  cy.location().should((loc) => {
    expect(loc.search).to.include(`search=${encodeQueryParam(searchQuery)}`);
  });
});

Cypress.Commands.add("addBlogTag", (tag) => {
  cy.contains(tag)
    .should("have.attr", "aria-pressed", "false")
    .click()
    .should("have.attr", "aria-pressed", "true");
  cy.location().should((loc) => {
    expect(loc.search).to.include(`tags=${encodeQueryParam(tag)}`);
  });
});

Cypress.Commands.add("removeBlogTag", (tag) => {
  cy.contains(tag)
    .should("have.attr", "aria-pressed", "true")
    .click()
    .should("have.attr", "aria-pressed", "false");
  cy.location().should((loc) => {
    expect(loc.search).to.not.include(`tags=${encodeQueryParam(tag)}`);
  });
});

Cypress.Commands.add("verifyTagDisabled", (tag) => {
  cy.contains(tag).should("have.attr", "aria-disabled", "true");
});

Cypress.Commands.add(
  "sortBlogs",
  (sortKey: "date-asc" | "date-desc" | "views-asc" | "views-desc") => {
    cy.getBySel("blog-sortby").should("be.visible").click();
    cy.getBySel(sortKey).should("be.visible").click();

    cy.location().should((loc) => {
      expect(loc.search).to.include(`sortBy=${encodeQueryParam(sortKey)}`);
    });
  }
);

Cypress.Commands.add(
  "checkSorted",
  (identifier, expectedLength, extractor, options = { ascending: true }) => {
    cy.getBySel(identifier)
      .should("have.length", expectedLength)
      .then(($items) => Cypress._.map($items, extractor))
      .then(($items) => {
        let expected = Cypress._.sortBy($items);
        if (!options.ascending) {
          expected = expected.reverse();
        }

        // Assert expected order
        expect(expected).to.deep.equal($items);
      });
  }
);
