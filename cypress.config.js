

const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	defaultCommandTimeout: 10000,
    e2e: {
	
    specPattern: ['**/*.feature', '**/apiTests/*/*.js'],
	chromeWebSecurity: false,
	env: {
		snapshotOnly: true,
		requestMode: true
	  },
     async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
       on(
         'file:preprocessor',
         createBundler({ plugins: [createEsbuildPlugin(config)] })
     );
   return config;
  },
},
})

