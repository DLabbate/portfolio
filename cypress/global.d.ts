/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Yields elements with a data-test attribute that match a specified selector.
     */
    getBySel(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * Yields elements with a data-test attribute that contains a specified selector.
     */
    getBySelLike(
      dataTestPrefixAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * Changes the theme to light mode.
     */
    setLightMode(): Chainable<JQuery<HTMLElement>>;

    /**
     * Changes the theme to dark mode.
     */
    setDarkMode(): Chainable<JQuery<HTMLElement>>;

    /**
     * Gets all links and verifies that none of them are broken.
     * @link https://www.browserstack.com/guide/how-to-find-broken-links-in-cypress
     */
    getAllLinks(): Chainable<JQuery<HTMLElement>>;

    /**
     * Searches blogs according to a given query.
     * @param query The search query.
     */
    searchBlogs(query: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Selects a blog tag. _Expects it to not be already pressed._
     */
    addBlogTag(tag: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Removes a tag. _Expects it to be already pressed._
     */
    removeBlogTag(tag: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Sorts blogs by a given key.
     */
    sortBlogs(
      sortKey: "date-asc" | "date-desc" | "views-asc" | "views-desc"
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * Checks that items with a given data-test attribute are sorted.
     * @param identifier Identifier of the elements (data-test attribute).
     * @param expectedLength Expected number of matches for the identifier.
     * @param extractor Method to convert the HTML element to the appropriate type for comparison.
     * @param options Optional arguments
     */
    checkSorted(
      identifier: string,
      expectedLength: number,
      extractor: (el: HTMLElement) => any,
      options?: { ascending: boolean }
    ): Chainable<JQuery<HTMLElement>>;
  }
}
