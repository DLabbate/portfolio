describe("blog views api", () => {
  it("should allow up to 5 requests within the limit, then enforce rate limit on the 6th request", () => {
    const slug = "idempotency";

    // Reset the rate limiter
    cy.wait(15000);

    cy.incrementBlogViews(slug).then((response) => {
      expect(response.status).to.equal(204);
      expect(response.headers["ratelimit-limit"]).to.exist;
      expect(response.headers["ratelimit-remaining"]).to.exist;
      expect(response.headers["ratelimit-reset"]).to.exist;
    });

    // Attempt to spam the api
    for (let i = 1; i <= 10; i++) {
      cy.incrementBlogViews(slug);
    }

    // Verify that a 429 response is reached
    cy.incrementBlogViews(slug).then((response) => {
      expect(response.status).to.equal(429);
      expect(response.body).to.equal("Too many requests");
    });
  });

  it("should return 400 status for invalid slugs", () => {
    const invalidSlug = "some-invalid-slug";

    cy.incrementBlogViews(invalidSlug).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.equal(`${invalidSlug} is not a valid slug`);
    });
  });
});
