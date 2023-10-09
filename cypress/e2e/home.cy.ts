describe("home page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("checks all links are valid", function () {
    cy.getAllLinks();
  });
});
