/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {
		it('Proper login', () => {
			// JSON.parse()

			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.pass);

                cy.get('.item5').click();
             
				testBasePage.getAddTest()
				
				
			});
		});
	});
});

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {
		it('Proper login', () => {
			// JSON.parse()

			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.pass);

                cy.get('.item5').click();
             
				testBasePage.getAddTest()
				
				
			});
		});
	});
});
