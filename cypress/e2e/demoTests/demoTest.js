/// <reference types="cypress" />
import { loginPage } from "../../pages/pageObjects/loginPage/loginPage";


describe('Demo TestArena Tests', function () {
	context('Proper login tests', function () {
		it('Demo login test', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').type('sumXQQ72$L');
			cy.contains('Zaloguj').click();

			cy.url().should('include', 'http://demo.testarena.pl');


			// Przykład asercji jednokrotnej
			cy.url().then((url) => {
				assert.strictEqual(url, 'http://demo.testarena.pl/');

				expect(url).to.equal('http://demo.testarena.pl/');
			});

			// Przykład asercji wielokrotnej
			cy.url().should((url) => {
				assert.strictEqual(url, 'http://demo.testarena.pl/');

				expect(url).to.equal('http://demo.testarena.pl/');
			});
		});

		it('Demo logout test', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').type('sumXQQ72$L');
			cy.get('#login').contains('Zaloguj').click();

			cy.get('.icons-switch.icon-20').click();

			cy.url().should('include', 'http://demo.testarena.pl/zaloguj');

			cy.get('#text-2 > div > form').should('be.visible');
		});

		it.only('False login test', function () {
			
			loginPage
			.visitPage('http://demo.testarena.pl/zaloguj')
			.login(loginPage.randomString(), loginPage.randomString(25, 'number'))

			
			// loginPage.login(`${loginPage.randomString(5)}&^(*^)&)()${loginPage.randomString(30, 'number')}`, loginPage.randomString(25, 'number'))
	
			// cy.fixture('example/example').then((fixtureObject)=> {

			// 	loginPage.login(fixtureObject.falseEmail, fixtureObject.falsePass)
			// })

			cy.logInfo('Udało się wykonać logowanie')

			cy.get('.login_form_error').eq(0).should('be.visible');
			cy.get('.login_form_error').eq(0).should('have.text', 'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.')

			cy.get('.login_form_error').eq(1).should('be.visible');
			cy.get('.login_form_error').eq(1).should('have.text', 'Adres e-mail i/lub hasło są niepoprawne.')

			cy.get('.login_form_error').eq(1).invoke('text').should((value) => {
			
			expect(value).to.equal('Adres e-mail i/lub hasło są niepoprawne.');
			
			})
		});
	});
});
