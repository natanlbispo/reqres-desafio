require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: false,
    watchForFileChanges: false,

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: process.env.CYPRESS_API_PROCESSOR,
        supportFile: 'cypress/support/index.js',
        specPattern: 'cypress/tests/API/*.{js,jsx,ts,tsx}',
    },
});