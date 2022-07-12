import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';

class LoginPage extends BasePage {
	constructor(url = 'http://demo.testarena.pl') {
		super(url);
	}

	login(login = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		cy.get(loginPageSelectors.email).type(login);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.contains('Login').click();
	}
}

export const loginPage = new LoginPage();
