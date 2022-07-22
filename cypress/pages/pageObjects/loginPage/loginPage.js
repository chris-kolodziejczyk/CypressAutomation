import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';

export class LoginPage extends BasePage {
	constructor() {
		super();
	}

/**
 * @param login - String
 * @param pass - String
 */
	login(login, pass) {
		cy.get(loginPageSelectors.login).type(login);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.get(loginPageSelectors.loginBtn).click();

		return this;
	}
}

export const loginPage = new LoginPage();
