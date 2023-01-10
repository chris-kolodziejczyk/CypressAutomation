import BasePage from '../basePage'
import loginPageSelectors from './loginPageSelectors'

class LoginPage extends BasePage{

    constructor() {
        super()
    }

    login(email = 'administrator@testarena.pl', password = 'sumXQQ72$L') {

        cy.get(loginPageSelectors.email).type(email);
		cy.get(loginPageSelectors.password).type(password);
		cy.get(loginPageSelectors.loginBtn).click();
    }

    checkLogin() {
        cy.url().should('include', 'http://demo.testarena.pl');

        cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');

			expect(url).to.equal('http://demo.testarena.pl/');
		});
    }

}

export const loginPage = new LoginPage()