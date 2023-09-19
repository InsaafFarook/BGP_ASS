const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline,
    reportDir: 'cypress/report',
  },

  e2e: {
    experimentalOriginDependencies : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

    }  
  },
});
