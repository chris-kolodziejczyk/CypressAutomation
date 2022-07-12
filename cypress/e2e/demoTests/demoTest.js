/// <reference types="cypress" />

import { LoginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Demo TestArena Tests', function () {
	it('Demo login test', function () {
		LoginPage.visitPage(Cypress.env('url'));
		LoginPage.login();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it.only('#2 Demo login test', function () {
		LoginPage.visitPage(Cypress.env('url'));
		LoginPage.login('KHB%*&%&', '^&*^(*HJNKM');

		cy.url().should('include', 'http://demo.testarena.pl/logowanie');
		cy.contains(
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		).should(
			'contain.text',
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		);
		cy.contains(
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		).should('contain.text', 'Adres e-mail i/lub hasło są niepoprawne.');
	});


	it.only('#2 Demo login test', function () {
		LoginPage.visitPage(Cypress.env('url'));
		LoginPage.login('^%DHCSJVKLKD');

		cy.url().should('include', 'http://demo.testarena.pl/logowanie');
		cy.contains(
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		).should(
			'contain.text',
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		);
	});
});
