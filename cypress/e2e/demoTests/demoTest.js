/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Demo TestArena Tests', function () {

	
	it('Demo login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit(testArenaDemoPage);
		cy.url().should('include', 'demo.testarena');
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it('Second demo login test', function () {
		let homeLink = 'http://demo.testarena.pl/';

		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();

		cy.url().should('include', homeLink);
		cy.url().should((link) => {
			assert.strictEqual(link, homeLink);
			expect(link).to.equal(homeLink);
		});
	});

	it('demo false login test', function () {
		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		loginPage.login('vwfwe', 'efefewf');

		cy.get('.login_form_error')
			.eq(0)
			.should('be.visible')
			.and(
				'include.text',
				'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
			);
		cy.get('.login_form_error')
			.eq(1)
			.should('be.visible')
			.and('include.text', 'Adres e-mail i/lub hasło są niepoprawne.');
	});

	it('Add test case to test base ', function () {
		loginPage.visitPage().login('administrator@testarena.pl', 'sumXQQ72$L');
		mainPage.goToTestBase();

		testBasePage
			.addTestToTestBase(
				'Test automatyczny',
				`${testBasePage.randomString(1, 'letters')}${testBasePage.randomString(
					10,
					'number'
				)}`,
				testBasePage.randomString(50, 'letters'),
				testBasePage.randomString(30, 'letters')
			)
			.checkAddedTest();
	});

context('search test on test base list', () => {


	beforeEach(() => {
		// request z dodaniem faktury

		loginPage.visitPage()
		.login()
		
	})
	it.only('should search test on test base list', function () {
		mainPage.goToTestBase()
		testBasePage.searchTest('jakiś tekst')
		testBasePage.checkTestOnList('jakiś tekst')
		
	});
})


});
