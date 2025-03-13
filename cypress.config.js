const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    baseUrl: "https://dashboard-test-iaac.digy4.com",
    env: {
      apiBaseUrl: "https://u7dd3kq498.execute-api.us-west-2.amazonaws.com/prod" // API Base URL
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
