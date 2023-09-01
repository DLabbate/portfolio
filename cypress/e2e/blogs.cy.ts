describe("blogs page", () => {
  beforeEach(() => {
    cy.visit("/blogs");
  });

  it("checks all links are valid", () => {
    cy.getAllLinks();
  });
});
