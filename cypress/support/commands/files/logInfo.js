/// <reference types="cypress" />

Cypress.Commands.add('logInfo', (info = '') => {
	cy.log(info);
});