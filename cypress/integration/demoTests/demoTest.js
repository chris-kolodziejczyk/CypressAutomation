/// <reference types="cypress" />


describe('Cypress.io tests', function() {
	it.only('Open cypress.io page', function() {
	  var cypressPage = 'https://www.cypress.io/'
	  cy.visit(cypressPage)
	  cy.url().should('include', cypressPage);
	  cy.get('[href="/features"]');
	  cy.get('[aria-label="see-more-features"]');
	  cy.contains('See more features').click();
	  cy.url().should('include', '/features');
	  cy.contains('A test runner built for humans')
	  cy.contains('An open source, front-end testing tool, built for the modern web.')
	  cy.get('input[type="email"]').type('moj@email.com').should('have.value','moj@emial.com')
	})
  })