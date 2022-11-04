/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Demo TestArena Tests', function () {
	// () => {

	// }
	beforeEach(function () {
		loginPage.visitPage().login();
	});

	it('Demo proper login test', function () {
		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	// BUG: Invalid url for expected result
	it('Demo proper login test', function () {
		loginPage.visitPage().login();
		mainPage.logout();
		cy.url().should('include', 'http://demo.testarena.pl/zalogu');
	});






	it('Demo proper login test', function () {
		loginPage.visitPage().login('administrator@testarena.pl', 'sumXQQ72$L');
		mainPage.logout();

		// BUG: Invalid url for expected result
		cy.url().should('include', 'http://demo.testarena.pl/zaloguj');
	});










	

	it('Demo proper login test', function () {
		mainPage.clickMenuOption();
		testBasePage.goToTest();
		testBasePage.fillTestForm(
			testBasePage.randomString(3),
			testBasePage.randomString(1),
			testBasePage.randomString(1)
		);
	});

	it.only('Demo proper login test', function () {
		mainPage.clickMenuOption();
		testBasePage.goToTest();
		testBasePage.fillTestForm(
			testBasePage.randomString(255),
			testBasePage.randomString(5000),
			testBasePage.randomString(1000)
		);
	});

	it.only('Demo proper login test', function () {
		mainPage.clickMenuOption();
		testBasePage.goToTest();
		testBasePage.fillTestForm(
			testBasePage.randomString(2),
			testBasePage.randomString(0),
			testBasePage.randomString(0)
		);
	});
});
