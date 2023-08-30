describe("theme", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("toggles light/dark mode", () => {
    cy.get('[data-test="moon"]').filter(":visible").click();
    cy.get("html").should("have.class", "light");
    cy.get('[data-test="sun"]').filter(":visible").click();
    cy.get("html").should("have.class", "dark");
  });
});
