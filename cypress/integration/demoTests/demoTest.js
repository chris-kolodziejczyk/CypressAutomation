/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Demo TestArena Tests', function () {
	it('Demo login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit(testArenaDemoPage);
		cy.url().should('include', 'demo.testarena');
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it.only('Demo remember login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		cy.get(
			'#text-2 > div > form > div.login_table > div.remember_check > label'
		).click();
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();
		cy.get('.icons-switch').click();
		cy.url().should('include', '/zaloguj');
		

		cy.get('#email').then((emailElem) => {
			cy.wrap(emailElem)
				.should('', 'administrator@testarena.pl')
				.and('be.visible');
		});
	});
});
