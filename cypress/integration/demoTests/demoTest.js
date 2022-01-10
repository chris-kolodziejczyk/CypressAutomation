/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBase/testBasePage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it('Demo login test', function () {
			loginPage.visitPage().login();
			cy.url().should('include', 'http://demo.testarena.pl');
			mainPage.checkMainPageElems();
			// NOTE: Przykłady innego wykorzystania asercji dla sprawdzenia adresu url
			// cy.url().then((url) => {
			//   assert.strictEqual(url, 'http://demo.testarena.pl/');

			//   expect(url).to.equal('http://demo.testarena.pl/');
			// });
		});

		it('Demo add test to test base', function () {
			loginPage.visitPage().login();
			mainPage.goToTestBase();
			testBasePage.addTestCase(3, 1, 1).checkAddTestCase();
		});

		it('Demo add test to test base1', function () {
			loginPage.visitPage().login();
			mainPage.goToTestBase();
			testBasePage.addTestCase(0, 0, 0)
		});

		it('Demo add test to test base1', function () {
			loginPage.visitPage().login();
			mainPage.goToTestBase();
			testBasePage.addTestCase(255, 5000, 1000)
		});
	});
});
