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

  // https://www.cypress.io/blog/2020/12/10/testing-the-anchor-links/
  it("all links are valid", () => {
    cy.get("a").each((a) => {
      const message = a.text();
      expect(a, message).to.have.attr("href").not.contain("undefined");
    });
  });

  it.only("checks all links are valid", () => {
    cy.get("a")
      .filter(":not([href*='linkedin'])") // linkedin does not allow direct access
      .each((a) => {
        cy.request(a.prop("href"));
      });
  });
});
