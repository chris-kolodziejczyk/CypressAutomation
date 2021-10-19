import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo login test', function () {
			loginPage.visitPage().login()

			cy.url().should('include', 'http://demo.testarena.pl');
		});
	});
});
