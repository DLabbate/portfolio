describe("links", () => {
  // Combine all the routes
  let allRoutes: string[] = [];

  before(() => {
    cy.fixture<[{ path: string; text: string }]>("header").then((data) => {
      allRoutes.push(...data.map((item) => item.path));
    });
    cy.fixture<[string]>("blogs").then((data) => {
      allRoutes.push(...data.map((item) => "/blogs/" + item));
    });
    cy.fixture<[string]>("projects").then((data) => {
      allRoutes.push(...data.map((item) => "/portfolio/projects/" + item));
    });
  });

  it("checks all links are valid", () => {
    allRoutes.forEach((route) => {
      cy.visit(route);
      cy.getAllLinks();
    });
  });
});
