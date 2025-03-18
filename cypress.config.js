const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { DigyRunner } = require("@digy4/digyrunner-cypress");

module.exports = defineConfig({
  videosFolder: "cypress/videos",
  video: true,
  videoCompression: true,
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: false,
  digyRunnerConfig: {
    // PROTOCOL: "http",
    // HOSTNAME: "localhost",
    // PROJECT_NAME: "demo",
    // TEAM_NAME: "Team",
    LOB: "AUTOMATION",
    TEAM_NAME: "DIGY4",
    PROJECT_NAME: "RCASEPC",
    BUILD_ID: "",
    SUITE_NAME: "Regression",
    APP_VERSION: "2.0",
    ENVIRONMENT: "test",
    FRAMEWORK: "cypress", // don't change
    MODULE_NAME: "SomeModuleName",
    TESTER: "Joe Bloggs",
    BA: "Joe Bloggs",
    DEVELOPER: "Joe Bloggs",
    RESULTS_SUMMARY_URL: `https://3qsmhuqr59.execute-api.us-east-1.amazonaws.com/digy4-test/v3/resultsSummary`,
    RESULTS_URL: `https://3qsmhuqr59.execute-api.us-east-1.amazonaws.com/digy4-test/v3/results`,
    PROJECT_PLAN_URL: `https://i6ay4nzcee.execute-api.us-east-1.amazonaws.com/test/users/project-plan-details`,
    CLIENT_ID: "c15162a85816d4bcd4e310aa1969d668:0b52343f9040491bcb96f008f8e3e4d2",
    CLIENT_SECRET: "2d8c28e1b7914cc99ab216d4b59ee86c:f82a03f5d49ce4832098ac7bddaa5bd1",
    LOGS_UPLOAD_BASE_URL:'https://3qsmhuqr59.execute-api.us-east-1.amazonaws.com/digy4-test/getPresignedUrl', 
    TAGS: "",
    filterSpecs: true,
    omitFiltered: true,
    TEST_TYPE: "WEB"
    //TEST_TYPE: "API"
    //TEST_TYPE: "HYBRID"
  },
  e2e: {
    testIsolation: false,
    baseUrl: "https://dashboard-test-iaac.digy4.com",
    env: {
      apiBaseUrl: "https://u7dd3kq498.execute-api.us-west-2.amazonaws.com/prod" // API Base URL
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));

      await DigyRunner.setup(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/dashboard.feature",  //WEB
   // specPattern: "cypress/e2e/**/API.feature", //API
  },
});
