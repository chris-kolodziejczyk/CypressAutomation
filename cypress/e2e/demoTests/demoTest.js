/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';

describe('Demo TestArena Tests', function () {
	it('Demo proper login test', function () {
		loginPage.visitPage('/');
		loginPage.login();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it.only('Demo false login test', function () {
		loginPage.visitPage('/');
		loginPage.login('rgerg', 'fef');

		cy.url().should('include', 'http://demo.testarena.pl/logowanie');
		cy.get('#text-2 > div > form > div:nth-child(2) > span > div').should(
			'include.text',
			'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
		);
		cy.get('#text-2 > div > form > div:nth-child(3) > span > div').should(
			'include.text',
			'Adres e-mail i/lub hasło są niepoprawne.'
		);
	});

	it('Demo logout test', function () {
		loginPage.visitPage('/');
		loginPage.login()
		cy.url().should('include', 'http://demo.testarena.pl/');
		mainPage.logOut();
		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/zaloguj');

			expect(url).to.equal('http://demo.testarena.pl/zaloguj');
		});
	});
});
