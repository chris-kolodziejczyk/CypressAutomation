/// <reference types="cypress" />
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { adminPage } from '../../pages/pageObjects/adminPage/adminPage';

describe('Demo TestArena Tests', function () {
	context('Example context', function () {
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

		it('Should not login to app with wrong pass', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';

			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').clear();
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').clear();
			cy.get('#password').type('JBK^$&%&*%*&6546464');

			cy.get('#login').contains('Zaloguj').click();

			cy.get('.login_form_error').should('be.visible');
			cy.get('.login_form_error').should(
				'contain.text',
				'Adres e-mail i/lub hasło są niepoprawne.'
			);
		});

		it('Should not login to app with wrong email', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';

			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').clear();
			cy.get('#email').type('administratortessswdwtarena.pl');
			cy.get('#password').clear();
			cy.get('#password').type('sumXQQ72$L');

			cy.get('#login').contains('Zaloguj').click();

			cy.get('.login_form_error').eq(0).should('be.visible');
			cy.get('.login_form_error')
				.eq(0)
				.should(
					'contain.text',
					'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
				);

			cy.get('.login_form_error').eq(1).should('be.visible');
			cy.get('.login_form_error')
				.eq(1)
				.should('contain.text', 'Adres e-mail i/lub hasło są niepoprawne.');
		});

		it('Should not login to app with wrong email', function () {
			let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';

			cy.visit(testArenaDemoPage);
			cy.url().should('include', 'demo.testarena');
			cy.get('#email').clear();
			cy.get('#email').type('administrator@testarena.pl');
			cy.get('#password').clear();
			cy.get('#password').type('sumXQQ72$L');
			cy.get('#login').contains('Zaloguj').click();

			cy.get('.item5').click();
			cy.get('.open.button_link').click();
			cy.get('.button_link_li').eq(1).contains('Przypadek testowy').click();
			cy.get('#name').clear().type('wdeqfevfdvd1fewfewf');
			cy.get('#description').clear().type('efw1fwefewfew');
			cy.get('#result').clear().type('feewfew1fewf');
			cy.get('#add').click();

			cy.get('#j_info_box')
				.should('be.visible')
				.and('contain.text', 'Przypadek testowy został dodany.');
		});

		it('should find project correctly', function () {
			const projectName = 'IcoWPEzb';

			loginPage
				.visitPage()
				.login();

			mainPage
			.goToAdministrationPage();

			cy.get('#search').type(projectName);
			cy.get('#j_searchButton').click();
			cy.get('tbody tr')
				.should('have.length.at.least', 1)
				.and('contain.text', projectName);
		});

		it.only('should find project correctly', function () {

			loginPage
				.visitPage()
				.login();

			mainPage
			.goToAdministrationPage();

			adminPage.goToAddRole()
			adminPage.addRole()

		});
	});
});
