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
	});
});
