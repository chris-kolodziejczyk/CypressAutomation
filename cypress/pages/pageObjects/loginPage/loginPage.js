import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';

export class LoginPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	login(
		email = 'administrator@testarena.pl',
		pass = 'sumXQQ72$L',
		loginBtnText = 'Zaloguj'
	) {
		
		cy.get(loginPageSelectors.email).type(email);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.contains(loginBtnText).click();
	}


}

export const loginPage = new LoginPage();
