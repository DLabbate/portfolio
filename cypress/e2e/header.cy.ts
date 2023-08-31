describe("header", () => {
  context("large screen", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit("/");
      cy.getBySel("large-header").should("be.visible");
    });

    it("navigates to all pages", () => {
      cy.fixture<[{ text: string; path: string }]>("pages").then((data) => {
        data.forEach(({ text, path }) => {
          cy.contains(text).should("be.visible").click();

          cy.location("pathname").should("eq", path);
          cy.getBySel(`header-link-underline-${text.toLowerCase()}`).should(
            "be.visible"
          );
        });
      });
    });

    it("toggles light/dark mode", () => {
      cy.getBySel("moon-icon").filter(":visible").click();
      cy.get("html").should("have.class", "light");

      cy.getBySel("sun-icon").filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });

  context("small screen", () => {
    beforeEach(() => {
      cy.viewport("ipad-mini");
      cy.visit("/");
      cy.getBySel("small-header").should("be.visible");
    });

    it("navigates to all pages", () => {
      cy.fixture<[{ text: string; path: string }]>("pages").then((data) => {
        data.forEach(({ text, path }) => {
          cy.getBySel("menu-icon").click();

          cy.getBySel("x-icon").should("be.visible");
          cy.getBySel("expandable-menu").should("be.visible");

          cy.contains(text).should("be.visible").click();

          cy.location("pathname").should("eq", path);
          cy.getBySel("menu-icon").should("be.visible");
          cy.getBySel("expandable-menu").should("not.exist");
        });
      });
    });

    it("toggles light/dark mode", () => {
      cy.getBySel("moon-icon").filter(":visible").click();
      cy.get("html").should("have.class", "light");

      cy.getBySel("sun-icon").filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });
});
