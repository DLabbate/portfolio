describe("header", () => {
  let pages: [{ text: string; path: string }];

  context("large screen", () => {
    beforeEach(() => {
      cy.fixture<[{ text: string; path: string }]>("header").then((data) => {
        pages = data;
      });
      cy.viewport(1280, 720);
      cy.visit("/");
      cy.getBySel("large-header").should("be.visible");
    });

    it("navigates to all pages", () => {
      pages.forEach(({ text, path }) => {
        cy.contains(text).should("be.visible").click();

        cy.getBySel(`header-link-underline-${text.toLowerCase()}`).should(
          "be.visible"
        );
        cy.location("pathname").should("eq", path);
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
      pages.forEach(({ text, path }) => {
        cy.getBySel("menu-icon").should("be.visible").click();

        cy.getBySel("x-icon").should("be.visible");
        cy.getBySel("expandable-menu").should("be.visible");

        cy.contains(text).should("be.visible").click();

        cy.location("pathname").should("eq", path);
        cy.getBySel("menu-icon").should("be.visible");
        cy.getBySel("expandable-menu").should("not.exist");
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
