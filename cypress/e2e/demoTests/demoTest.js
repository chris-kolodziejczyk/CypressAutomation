/// <reference types="cypress" />
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Demo TestArena Tests', function () {
	context('Example context', function () {
		beforeEach(() => {
			loginPage.visitPage('/');
		});

		// it('Demo login test', function () {
		// 	let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		// 	cy.visit(testArenaDemoPage);
		// 	cy.url().should('include', 'demo.testarena');
		// 	cy.get('#email').type('administrator@testarena.pl');
		// 	cy.get('#password').type('sumXQQ72$L');
		// 	cy.contains('Zaloguj').click();

		// 	cy.url().should('include', 'http://demo.testarena.pl');

		// 	cy.url().then((url) => {
		// 		assert.strictEqual(url, 'http://demo.testarena.pl/');

		// 		expect(url).to.equal('http://demo.testarena.pl/');
		// 	});

		// cy.url().should((url) => {
		// 	assert.strictEqual(url, 'http://demo.testarena.pl/');

		// 	expect(url).to.equal('http://demo.testarena.pl/');
		// });
		// });

		// it('Edit demo login test', function () {
		// 	cy.visit('/');
		// 	cy.url().should('include', 'demo.testarena');

		// 	cy.get('#email').type('administrator@testarena.pl');
		// 	cy.get('#password').type('sumXQQ72$L');

		// 	cy.get('#login').contains('Zaloguj').click();

		// 	cy.url().should('include', 'http://demo.testarena.pl');
		// });

		// it('Demo false login test', function () {
		// 	cy.visit('/');
		// 	cy.url().should('include', 'demo.testarena');

		// 	cy.get('#email').type('administrator@testarena.pl');
		// 	cy.get('#password').type('sumXQQ72$L###');

		// 	cy.get('#login').contains('Zaloguj').click();

		// 	cy.get('.login_form_error').should('be.visible').and('have.text', 'Adres e-mail i/lub hasło są niepoprawne.')
		// });

		it('Demo page object login test', function () {
			loginPage.login('wfqefewf', 'efwfewfew');

			loginPage.checkValidMsg(
				'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.Adres e-mail i/lub hasło są niepoprawne.'
			);
		});

		it.only('Demo add test to test base', function () {
			loginPage.login();
			mainPage.goToTestBase();
			testBasePage.addTestToTestBase(
				1,
				'Przypadek testowy',
				testBasePage.randomString(5),
				testBasePage.randomString(100),
				testBasePage.randomString(100)
			);
			testBasePage.checkAddedTest();
		});
	});
});
