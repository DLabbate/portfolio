describe("blogs page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checks all links are valid", () => {
    cy.getAllLinks();
  });
});
