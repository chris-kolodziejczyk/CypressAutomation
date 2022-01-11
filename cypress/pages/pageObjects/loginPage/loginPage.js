import loginPageSelectors from './loginPageSelectors';
import BasePage from '../basePage';

export class LoginPage extends BasePage {
	constructor() {
		super();
	}

	getLoginSelectors() {
		return {
			email: '#email',
			pass: '#password',
			loginBtn: '#login',
		};
	}

	login(login = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {

		cy.get(loginPageSelectors.email).then((elements) => {

			cy.wrap(elements[0]).click()
		})


		cy.get(loginPageSelectors.pass).type(pass)
		cy.contains('Zaloguj').click()
	}
}

export const loginPage = new LoginPage();
