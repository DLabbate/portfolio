describe("blogs list", () => {
  let blogs: string[];

  before(() => {
    cy.fixture<[string]>("blogs").then((data) => {
      blogs = data;
    });
  });

  beforeEach(() => {
    cy.visit("/blogs");
  });

  it("checks expected number of blogs", () => {
    cy.getBySel("blog-thumbnail").should("have.length", blogs.length);
  });

  it("checks input fields work", () => {
    // Search
    cy.get('[placeholder="Search..."]').should("be.visible");
    cy.searchBlogs("Scalab");

    // Tags
    cy.contains("Filter By Tag").should("be.visible");
    cy.addBlogTag("Microservices");
    cy.verifyTagDisabled("Databases");

    // Sort by
    cy.contains("Sort By").should("be.visible");
    cy.sortBlogs("date-asc");

    // Assert the query params
    cy.location().should((loc) => {
      expect(loc.search).to.eq(
        "?search=Scalab&tags=Microservices&sortBy=date-asc"
      );
    });

    // Assert the expected blog
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

    cy.addBlogTag(tag1);
    cy.addBlogTag(tag2);

    cy.location().should((loc) => {
      expect(loc.search).to.eq("?tags=Microservices&tags=Design+Patterns");
    });

    cy.removeBlogTag(tag2);

    cy.location().should((loc) => {
      expect(loc.search).to.eq("?tags=Microservices");
    });
  });

  context("sorting", () => {
    const viewsIdentifier = "view-counter";
    const viewsExtractor = (el: HTMLElement): number =>
      Number(el.innerText.replace(",", "").split(" ")[0]); // Extract the number from something like "1,043 Views"

    const dateIdentifier = "blog-date";
    const dateExtractor = (el: HTMLElement): Date =>
      new Date(el.innerText.replace(/(st|nd|rd|th)/, "")); // Extract the date from something like "October 2nd, 2023"

    type SortData = {
      sortKey: "views-asc" | "views-desc" | "date-asc" | "date-desc";
      text: string;
      ascending: boolean;
      extractor: (el: HTMLElement) => any;
      identifier: string;
    };

    const SORT_DATA: SortData[] = [
      {
        sortKey: "date-desc",
        text: "Date (Newest to Oldest)",
        ascending: false,
        extractor: dateExtractor,
        identifier: dateIdentifier,
      },
      {
        sortKey: "date-asc",
        text: "Date (Oldest to Newest)",
        ascending: true,
        extractor: dateExtractor,
        identifier: dateIdentifier,
      },
      {
        sortKey: "views-desc",
        text: "Views (High to Low)",
        ascending: false,
        extractor: viewsExtractor,
        identifier: viewsIdentifier,
      },
      {
        sortKey: "views-asc",
        text: "Views (Low to High)",
        ascending: true,
        extractor: viewsExtractor,
        identifier: viewsIdentifier,
      },
    ];

    SORT_DATA.forEach(({ text, identifier, sortKey, extractor, ascending }) => {
      it("sorts by date: " + text, () => {
        cy.sortBlogs(sortKey);
        cy.checkSorted(identifier, blogs.length, extractor, { ascending });
      });
    });
  });
});

describe("blogs page", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("scrolls to id element", () => {
    cy.visit("/blogs/async-messaging");

    cy.getBySel("table-of-contents").within(() => {
      cy.contains("Conclusion").should("have.attr", "aria-current", "false");
    });

    cy.contains("h2", "Conclusion").scrollIntoView({
      offset: {
        top: -100, // Some offset to account for the header component
        left: 0,
      },
      easing: "linear",
      duration: 1000,
    });

    cy.getBySel("table-of-contents").within(() => {
      cy.contains("Conclusion").should("have.attr", "aria-current", "true");
    });
  });
});
