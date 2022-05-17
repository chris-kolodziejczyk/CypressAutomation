/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

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

	it('Demo remember login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		cy.get(
			'#text-2 > div > form > div.login_table > div.remember_check > label'
		).click();
		loginPage.login();
		cy.get('.icons-switch').click();
		cy.url().should('include', '/zaloguj');

		cy.get('#email').then((emailElem) => {
			cy.wrap(emailElem)
				.should('have.text', 'administrator@testarena.pl')
				.and('be.visible');
		});
	});

	it('Demo login test with wrong pass', function () {
		cy.visit('/');
		loginPage.login('administrator@testarena.pl', '&(#^$@$@#&)$');
		loginPage.checkWalidMsg(
			'.login_form_error',
			'Adres e-mail i/lub hasło są niepoprawne.'
		);
	});

	it('assert footer', function () {
		loginPage.visitPage().checkFooter();
	});

	it.only('Login and add test case to test base ', function () {
		loginPage.visitPage().login('administrator@testarena.pl', 'sumXQQ72$L');
		cy.get('#wrapper > ul > li.item5 > a').click();
		cy.get('#content > article > nav > ul > div > a').click();
		cy.get('.button_link_li').eq(1).click();
		cy.get('#name').type(loginPage.randomString(10, 'letters'));
		cy.get('#description').type(loginPage.randomString(10, 'letters'));
		cy.get('#result').type(loginPage.randomString(10, 'letters'));
		cy.get('#add').click();
		cy.get('#j_info_box').should('contain.text', 'został dodany.');

		// Plik Fixtury - metoda Cypress
		// cy.fixture("example").then((objectData) => {

		// 	let userName = objectData.User1.name = randomString(10, 'letters')
		// })
	});
});

// Dodajemy nowy test "Dodanie testu do bazy testów"
// Logowanie, przejście do bazy testów, kliknięcie w opcję dodaj
// Kliknięcie w "Przypadek testowy"
// Wypełnienie formularza
// Kliknięcie "Zapisz"
// Weryfikacja komunikatu o dodaniu testu do bazy testów
