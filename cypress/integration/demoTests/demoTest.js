/// <reference types="cypress" />

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo login test', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').type('sumXQQ72$L');
			cy.contains('Zaloguj').click();

			cy.url().should('include', 'http://demo.testarena.pl');

			// NOTE: Przykłady innego wykorzystania asercji dla sprawdzenia adresu url
			// cy.url().then((url) => {
			//   assert.strictEqual(url, 'http://demo.testarena.pl/');

			//   expect(url).to.equal('http://demo.testarena.pl/');
			// });
		});
	});
});
