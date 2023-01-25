/// <reference types="cypress" />
import {loginPage} from '../../pages/pageObjects/loginPage/loginPage'


let email = '&^&^(*89870978';
let pass = 'uhfberh76988&*^&*(^(**';

describe('Demo TestArena Tests', function () {
	it('Demo login test', function () {

		loginPage.visitPage()

		loginPage.login()

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it('Demo login test1', function () {
		email = '&%*&%&%^(*^*(%^$%#$$^%&^*';

		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		cy.get('#email').type(email);
		cy.get('#password').type(pass);
		cy.contains('Zaloguj').click();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it('WHEN user chceck save login data checkbox THEN Login to app SHOULD url be proper', function () {
		email = 'administrator@testarena.pl';
		pass = 'sumXQQ72$L';

		cy.visit('/');
		cy.url().should('include', 'demo.testarena');

		let login = () => {
			cy.get('#email').type(email);
			cy.get('#password').type(pass);
			cy.contains('Zaloguj').click();
		};

		cy.get('[type="checkbox"]').check();

		login();

		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
	});

	it('Demo login test3', function () {
		cy.visit('/');
		cy.url().should('include', 'demo.testarena');
		cy.get(
			'#text-2 > div > form > div.login_table > div.remember_check > a'
		).contains('Nie pamiętam hasła');

		cy.get('.remember_check >*').contains('Strona logowania').click();

		cy.url().should('include', '/zaloguj');
	});
});
