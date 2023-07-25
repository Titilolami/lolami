const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://9mobile.com.ng",
      "defaultCommandTimeout": 10000,
      "pageLoadTimeout": 30000,
     "viewportHeight": 800,
     "viewportWidth": 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
