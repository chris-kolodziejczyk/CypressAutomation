/// <reference types="cypress" />
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBase/testBasePage';

let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
let includUrl = 'demo.testarena.pl';
const appUrl = 'http://demo.testarena.pl/';

describe('Demo login TestArena Tests', function () {
	context('Demo chrome tests', function () {
		it('Demo login test', function () {
			cy.visit(testArenaDemoPage);
			cy.url().should('include', includUrl);
			cy.get('#email').type(login);
			cy.get('#password').type(pass);
			cy.contains('Zaloguj').click();
			cy.url().should('include', includUrl);

			cy.url().then((url) => {
				assert.strictEqual(url, appUrl);
				expect(url).to.equal(appUrl);
			});
		});

		it('Demo login test1', function () {
			appUrl = 'http://demo.testarena.pl/zaloguj';

			cy.visit(testArenaDemoPage);
			cy.url().should('include', includUrl);
			cy.contains('Zaloguj').click();

			cy.url().should('include', includUrl);
			cy.url().then((url) => {
				assert.strictEqual(url, appUrl);
				expect(url).to.equal(appUrl);
			});
		});

		it('Demo login test2', function () {
			cy.visit(testArenaDemoPage);
			cy.get('#email').type(login);
			cy.get('#password').type(pass);
			cy.get('#login').click();
			cy.get('.icons-switch').click();
			// cy.url().should('include', Cypress.env('appUrl'));
			cy.url().should('include', includUrl + '/zaloguj');
			cy.get('.front-log').should('be.visible');
		});

		it('Demo login test3', function () {
			cy.visit('zaloguj');

			loginPage.login('proper', Cypress.env('login'), Cypress.env('pass'));
			mainPage.goToTestBase();
			testBasePage.addTestToTestBase().checkAddTest();
			cy.readDataFromFile()
		});
	});
});
