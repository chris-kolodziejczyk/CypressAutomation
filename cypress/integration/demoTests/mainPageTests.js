/// <reference types="cypress" />

import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Login page scenario', () => {
	beforeEach(function () {
		mainPage.visitPage();
	});

	context('Logout tests', () => {
		it('Logout test', () => {
			loginPage.login();
			mainPage.logout();
			loginPage.checkLoginPageElems();
		});

        	// wylogowanie z aplikacji
			// sprawdzenie czy jesteśmy na stronie logowania
	});
});
