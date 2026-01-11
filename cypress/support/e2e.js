// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './api_commands'
import './commands'
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
// Importa comandos customizados para API
import './api_commands'; // Adjust the path if necessary

import 'cypress-mochawesome-reporter/register';

//import '@shelex/cypress-allure-plugin';
// require('@shelex/cypress-allure-plugin');

// Alternatively you can use CommonJS syntax:
 // require('./commands')
// import 'cypress-plugin-api';

// import 'cypress-file-upload';

// afterEach(function () {
//   const testName = this.currentTest.title.replace(/[:\/]/g, '')
//   cy.screenshot(`final_${testName}`)
// })
