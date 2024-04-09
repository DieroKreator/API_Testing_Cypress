const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.swagger.io/',
    specPattern: 'cypress/integration/test.api.spec.js'
  },
});
