/// <reference types="cypress" />
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';

describe('Demo TestArena Tests', function () {
	context('Demo test', function () {

		beforeEach(() => {

			mainPage.visitPage('https://skleptest.pl/')
		})

		// it('Demo login test', function () {
		// 	let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		// 	cy.visit(testArenaDemoPage);
		// 	cy.url().should('include', 'demo.testarena');
		// 	cy.get('#email').type('administrator@testarena.pl');
		// 	cy.get('#password').type('sumXQQ72$L');
		// 	cy.contains('Zaloguj').click();
		// 	cy.url().should(() => {});
		// 	cy.url().then((url) => {
		// 		assert.strictEqual(url, 'http://demo.testarena.pl/');
		// 		expect(url).to.equal('http://demo.testarena.pl/');
		// 	});
		// });

		it('Demo login test', function () {
			mainPage.getMenuOption();
			cy.url().then((url) => {
				mainPage.checkUrl(url);
			});
		});

		it('Demo login test', function () {
			mainPage.goToCart()
			cy.url().then((url) => {
				mainPage.checkUrl(url);
			});
			cy.get('.button.wc-backward')
				.should('be.visible')
				.invoke('text')
				.then((text1) => {
					expect(text1).to.contain('Return to shop');
				});
		});

		it.only('Demo login test', function () {
			cy.get('#es_txt_name').type(mainPage.randomString());
			cy.get('#es_txt_email').type(`${mainPage.randomString()}@o2.pl`);
			cy.get('#es_txt_button').click();
			cy.get('#es_msg')
				.should('be.visible')
				.wait(1000)
				.invoke('text')
				.then((text1) => {
					expect(text1).to.contain('Successfully Subscribed.');
				});

				cy.goToCart()
		});
	});
});
