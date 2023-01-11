const { defineConfig } = require("cypress");

//Enviroment lari bulundurdugumuz yer 

module.exports = defineConfig({

  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 800,
  viewportWidth: 1080,
  failOnStatusCode: false,

  env: {
    baseUrl:'https://www.demoblaze.com/',
    username:'username',
    password:'password'

  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
