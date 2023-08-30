const LINKS = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Portfolio",
    path: "/portfolio",
  },
  {
    text: "Blogs",
    path: "/blogs",
  },
] as const;

describe("header", () => {
  context("large screen", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit("/");
    });

    it("click all header links", () => {
      // data.forEach((item) => {
      //   cy.contains(item.text).click();
      //   cy.location("pathname").should("eq", item.path);
      //   cy.get('[data-test="header-link-underline-home"]').should("be.visible");
      // });

      LINKS.forEach(({ text, path }) => {
        cy.contains(text).trigger("mouseover").click();
        cy.location("pathname").should("eq", path);
        cy.get(
          `[data-test="header-link-underline-${text.toLowerCase()}"]`
        ).should("be.visible");
      });

      // cy.contains("Home").click();
      // cy.location("pathname").should("eq", "/");
      // cy.get('[data-test="header-link-underline-home"]').should("be.visible");

      // cy.contains("Portfolio").click();
      // cy.location("pathname").should("eq", "/portfolio");
      // cy.get('[data-test="header-link-underline-portfolio"]').should(
      //   "be.visible"
      // );

      // cy.contains("Blogs").click();
      // cy.location("pathname").should("eq", "/blogs");
      // cy.get('[data-test="header-link-underline-blogs"]').should("be.visible");
    });

    it("toggles light/dark mode", () => {
      cy.get('[data-test="moon"]').filter(":visible").click();
      cy.get("html").should("have.class", "light");
      cy.get('[data-test="sun"]').filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });

  context("small screen", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it.only("click all header links", () => {
      LINKS.forEach(({ text, path }) => {
        cy.get('[data-test="menu-icon"]').click();

        cy.get('[data-test="x-icon"]').should("be.visible");
        cy.get('[data-test="mobile-menu"]').should("be.visible");

        cy.contains(text).should("be.visible").click();

        cy.location("pathname").should("eq", path);
        cy.get('[data-test="menu-icon"]').should("be.visible");
        cy.get('[data-test="mobile-menu"]').should("not.exist");
      });
    });

    it("toggles light/dark mode", () => {
      cy.get('[data-test="moon"]').filter(":visible").click();
      cy.get("html").should("have.class", "light");

      cy.get('[data-test="sun"]').filter(":visible").click();
      cy.get("html").should("have.class", "dark");
    });
  });
});
