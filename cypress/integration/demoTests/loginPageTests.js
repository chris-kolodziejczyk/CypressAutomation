/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {
		it('Login to app', () => {
			loginPage.login();
			cy.get('.icons-switch.icon-20').should('be.visible');

			// Wpisanie poprawnego adresu e-mail
			// Wpisanie hasła
			// kliknięcie w przycisk logowania
		});

		it('Login with wrong pass', () => {
			loginPage.login('administrator@testarena.pl', '*&#^#*&%^#');
			cy.get('#login').should('be.visible');
			// Wpisanie niepoprawnego adresu e-mail
			// Wpisanie hasła
			// kliknięcie w przycisk logowania
		});

		it('Login with wrong email', () => {
			loginPage.login('^%$*@#%@*%$(@*');
			cy.get('#login').should('be.visible');

			
			// Wpisanie niepoprawnego adresu e-mail
			// Wpisanie poprawnego hasła
			// kliknięcie w przycisk logowania
		});
	});
	
});
