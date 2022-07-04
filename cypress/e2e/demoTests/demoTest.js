/// <reference types="cypress" />

describe('Demo TestArena Tests', function () {
	it.only('Demo login test', function () {
		cy.visit(Cypress.env('url'));
		cy.url().should('include', 'zaloguj');
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});
});
