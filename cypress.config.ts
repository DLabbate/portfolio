import { defineConfig } from "cypress";

export default defineConfig({
  // https://github.com/cypress-io/cypress/issues/3623
  scrollBehavior: false,
  e2e: {
    setupNodeEvents(on, config) {
      // Add logs
      // https://docs.cypress.io/api/commands/task#Usage
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
    baseUrl: "http://localhost:3000",
  },
});
