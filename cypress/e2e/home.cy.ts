describe("portfolio page", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("/portfolio");
  });

  it("displays sections", () => {
    cy.contains("Experience").should("be.visible");
    cy.contains("Education").scrollIntoView().should("be.visible");
    cy.contains("Projects").scrollIntoView().should("be.visible");
    cy.contains("Accomplishments").scrollIntoView().should("be.visible");
  });
});
