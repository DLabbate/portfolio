describe("blogs page", () => {
  beforeEach(() => {
    cy.visit("/blogs");
  });

  it("checks all links are valid", () => {
    cy.getAllLinks();
  });

  it.only("checks search input works", () => {
    cy.scrollTo("top");

    cy.get('[placeholder="Search..."]').should("be.visible");
    cy.contains("Filter By Tag").should("be.visible");
    cy.contains("Sort By").should("be.visible");

    // Tags
    cy.contains("Microservices")
      .should("have.attr", "aria-pressed", "false")
      .click({ scrollBehavior: false });

    cy.contains("Microservices").should("have.attr", "aria-pressed", "true");

    // Search Input
    cy.getBySel("blog-search-input").type("Scalab", { scrollBehavior: false });

    // Sort By
    cy.getBySel("blog-sortby")
      .should("be.visible")
      .click({ scrollBehavior: false });

    cy.contains("Date (Oldest to Newest)")
      .should("be.visible")
      .click({ scrollBehavior: false });

    cy.contains("Scalability With Asynchronous Messaging")
      .scrollIntoView()
      .should("be.visible");
  });
});
