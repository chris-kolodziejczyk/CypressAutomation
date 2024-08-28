/// <reference types="cypress" />
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBase/testBasePage';

describe('Demo TestArena Tests', function () {
	context('Proper login tests', function () {
		it('Demo login test', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').type('sumXQQ72$L');
			cy.contains('Zaloguj').click();
			// cy.get('#login').contains('Zaloguj').click();

			cy.url().should('include', 'http://demo.testarena.pl');

			cy.url().then((url) => {
				assert.strictEqual(url, 'http://demo.testarena.pl/');

				expect(url).to.equal('http://demo.testarena.pl/');
			});

			cy.url().should((url) => {
				assert.strictEqual(url, 'http://demo.testarena.pl/');

				expect(url).to.equal('http://demo.testarena.pl/');
			});
		});

		it('Demo logout test', function () {
			cy.visit('/');
			// cy.visit(Cypress.env('url'));

			cy.url().should('include', 'demo.testarena');
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').type('sumXQQ72$L');
			cy.contains('Zaloguj').click();
			cy.get('.icons-switch').click();
			// cy.get('.icons-switch').eq(0).click()

			cy.url().should('include', 'http://demo.testarena.pl');
			cy.get('.front-log').should('be.visible');
		});

		it.only('Create new test', function () {
			loginPage
				.visitPage()
				.login()
			mainPage
				.goToTestBase();
			testBasePage
				.addTestToTestBase(
					1,
					'Przypadek testowy',
					testBasePage.randomString(50),
					testBasePage.randomString(50),
					testBasePage.randomString(50)
				)
				.checkAddedTest();
			cy.logInfo('Zakończenie testu')
		});
	});
});
