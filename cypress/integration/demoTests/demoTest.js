/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBase/testBasePage';
import { releasesPage } from '../../pages/pageObjects/releasesPage/releasesPage';

describe('Demo TestArena Tests', function () {
	it('Demo login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit(testArenaDemoPage);
		cy.url().should('include', 'demo.testarena');

		loginPage.login();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it.only('Demo test base test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit(testArenaDemoPage);
		cy.url().should('include', 'demo.testarena');

		loginPage.login();
		mainPage.clickTestBaseOpt();
		testBasePage
			.addTest(
				'testCase',
				testBasePage.randomString(8, 'letters'),
				testBasePage.randomString(8, 'letters'),
				testBasePage.randomString(8, 'letters')
			)
			.checkTestAddMsg();
	});

	it('Demo releases page test', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.clickTestBaseOpt('Releases');
		releasesPage.clickTestBaseOpt();
	});
});
