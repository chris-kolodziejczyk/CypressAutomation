import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';

class LoginPage extends BasePage {
	constructor() {
		super();
	}

	login(login = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		cy.get(loginPageSelectors.email).type(login);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click();
	}
}

export let loginPage = new LoginPage();
