import { defineConfig } from "cypress";

export default defineConfig({
  // https://github.com/cypress-io/cypress/issues/3623
  scrollBehavior: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
