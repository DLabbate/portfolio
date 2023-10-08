describe("blogs list", () => {
  beforeEach(() => {
    cy.visit("/blogs");
  });

  it("checks all links are valid", () => {
    cy.getAllLinks();
  });

  it("checks input fields work", () => {
    cy.get('[placeholder="Search..."]').should("be.visible");
    cy.contains("Filter By Tag").should("be.visible");
    cy.contains("Sort By").should("be.visible");

    // Search Input
    const searchQuery = "Scalab";
    cy.getBySel("blog-search-input").type(searchQuery);
    cy.location().should((loc) => {
      expect(loc.search).to.include(`search=${searchQuery}`);
    });

    // Tags
    const tag = "Microservices";
    cy.contains(tag)
      .should("have.attr", "aria-pressed", "false")
      .click()
      .should("have.attr", "aria-pressed", "true");
    cy.location().should((loc) => {
      expect(loc.search).to.include(`tags=${tag}`);
    });

    // Sort By
    cy.getBySel("blog-sortby").should("be.visible").click();
    cy.contains("Date (Oldest to Newest)").should("be.visible").click();
    cy.location().should((loc) => {
      expect(loc.search).to.include("sortBy=date-asc");
    });

    // Expected Blog
    cy.location().should((loc) => {
      expect(loc.search).to.eq(
        "?search=Scalab&tags=Microservices&sortBy=date-asc"
      );
    });
    cy.contains("Scalability With Asynchronous Messaging")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/blogs/async-messaging");
    });
  });

  it("checks tags can be toggled", () => {
    const tag1 = "Microservices";
    const tag2 = "Design Patterns";

    cy.contains(tag1)
      .should("have.attr", "aria-pressed", "false")
      .click()
      .should("have.attr", "aria-pressed", "true");

    cy.contains(tag2)
      .should("have.attr", "aria-pressed", "false")
      .click()
      .should("have.attr", "aria-pressed", "true");

    cy.location().should((loc) => {
      expect(loc.search).to.eq("?tags=Microservices&tags=Design+Patterns");
    });

    cy.contains(tag2).click().should("have.attr", "aria-pressed", "false");

    cy.location().should((loc) => {
      expect(loc.search).to.eq("?tags=Microservices");
    });
  });
});
