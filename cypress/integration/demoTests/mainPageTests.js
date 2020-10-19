/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {
		it('Proper login', () => {
			// JSON.parse()
			
			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.pass);
				mainPage.logOut();
				cy.url().should('include', 'http://demo.testarena.pl');
			});
		});

		it.only('Proper login', () => {
			// JSON.parse()

			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.pass);

				cy.get('.author').then((authorsTitleElems) => {
					console.log(authorsTitleElems.text());
					assert.strictEqual(authorsTitleElems.length, 6);
				});
			});
		});
	});
});
