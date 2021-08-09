/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {

		it('Login with wrong pass', () => {
			// Wpisanie poprawnego adresu e-mail
			// Wpisanie hasła
			// kliknięcie w przycisk logowania
		});

		it('Login with wrong email', () => {
			// Wpisanie niepoprawnego adresu e-mail
			// Wpisanie poprawnego hasła
			// kliknięcie w przycisk logowania
		});
	});
});
