describe("portfolio page", () => {
  beforeEach(() => {
    cy.visit("/portfolio");
  });

  it("displays sections", () => {
    cy.contains("Experience").should("be.visible");
    cy.contains("Education").scrollIntoView().should("be.visible");
    cy.contains("Projects").scrollIntoView().should("be.visible");
    cy.contains("Accomplishments").scrollIntoView().should("be.visible");
  });

  it("checks all links are valid", () => {
    cy.getAllLinks();
  });
});
