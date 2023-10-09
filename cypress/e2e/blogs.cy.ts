describe("blogs list", () => {
  let blogs: string[], sortData: [{ sortKey: string; text: string }];

  beforeEach(() => {
    cy.visit("/blogs");

    cy.fixture<[string]>("blogs").then((data) => {
      blogs = data;
    });
    cy.fixture<[{ sortKey: string; text: string }]>("blogs-sort").then(
      (data) => {
        sortData = data;
      }
    );
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

  it("checks that all sorting options work as expected", () => {
    sortData.forEach((item: { sortKey: string; text: string }) => {
      // Select the sorting method
      cy.getBySel("blog-sortby").should("be.visible").click();
      cy.getBySel(item.sortKey).should("be.visible").click();

      // Wait for query params to be updated
      cy.location().should((loc) => {
        expect(loc.search).to.include(item.sortKey);
      });

      // Next, gather the data and compare with expected values

      type SortType = "views" | "date";

      const data: Record<
        SortType,
        {
          identifier: string; // Identifier (data-test)
          iteratee: (el: HTMLElement) => any; // Converting from the text to appropriate value for comparison
        }
      > = {
        views: {
          identifier: "view-counter",
          iteratee: (el) => Number(el.innerText.split(" ")[0]),
        },
        date: {
          identifier: "blog-date",
          iteratee: (el) => new Date(el.innerText.replace(/(st|nd|rd|th)/, "")),
        },
      };

      const sortType = item.sortKey.includes("views") ? "views" : "date";
      const { identifier, iteratee } = data[sortType];

      cy.getBySel(identifier)
        .should("have.length", blogs.length)
        .then(($items) => Cypress._.map($items, iteratee))
        .then(($items) => {
          let expected = Cypress._.sortBy($items);
          if (item.sortKey.includes("desc")) {
            expected = expected.reverse();
          }

          // Assert expected order
          expect(expected).to.deep.equal($items);
        });
    });
  });
});

describe("blogs page", () => {
  let blogs: string[];
  beforeEach(() => {
    cy.viewport(1280, 720);

    cy.fixture<[string]>("blogs").then((data) => {
      blogs = data;
    });
  });

  it("checks all links are valid", () => {
    blogs.forEach((slug) => {
      cy.visit(`blogs/${slug}`).getAllLinks();
    });
  });

  it("scrolls to id element", () => {
    cy.visit("/blogs/async-messaging");
    cy.get("#conclusion").scrollIntoView().wait(1000); // Wait for smooth scroll to finish

    cy.getBySel("table-of-contents").within(() => {
      cy.contains("Conclusion").should("have.attr", "aria-current", "true");
    });
  });
});
