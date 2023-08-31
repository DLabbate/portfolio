describe("header", () => {
  context("large screen", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit("/");
    });

    it("navigates to pages", () => {
      cy.fixture<[{ text: string; path: string }]>("pages").then((data) => {
        data.forEach(({ text, path }) => {
          cy.contains(text).should("be.visible").click();

          cy.location("pathname").should("eq", path);
          cy.get(
            `[data-test="header-link-underline-${text.toLowerCase()}"]`
          ).should("be.visible");
        });
      });
    });

    it("toggles light/dark mode", () => {
      cy.get('[data-test="moon-icon"]').filter(":visible").click();
      cy.get("html").should("have.class", "light");

      cy.get('[data-test="sun-icon"]').filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });

  context("small screen", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("navigates to all pages", () => {
      cy.fixture<[{ text: string; path: string }]>("pages").then((data) => {
        data.forEach(({ text, path }) => {
          cy.get('[data-test="menu-icon"]').click();

          cy.get('[data-test="x-icon"]').should("be.visible");
          cy.get('[data-test="mobile-menu"]').should("be.visible");

          cy.contains(text).should("be.visible").click();

          cy.location("pathname").should("eq", path);
          cy.get('[data-test="menu-icon"]').should("be.visible");
          cy.get('[data-test="mobile-menu"]').should("not.exist");
        });
      });
    });

    it("toggles light/dark mode", () => {
      cy.get('[data-test="moon-icon"]').filter(":visible").click();
      cy.get("html").should("have.class", "light");

      cy.get('[data-test="sun-icon"]').filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });
});
