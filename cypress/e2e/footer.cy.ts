describe("footer", () => {
  context("large screen", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("is visible on all pages", () => {
      cy.fixture<[{ text: string; path: string }]>("pages").then((data) => {
        data.forEach(({ path }) => {
          cy.visit(path);

          cy.contains("© Domenic Labbate. All Rights Reserved.")
            .scrollIntoView()
            .should("be.visible");
        });
      });
    });
  });
});
