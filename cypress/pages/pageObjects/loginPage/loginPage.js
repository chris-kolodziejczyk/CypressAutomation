import loginPageSelectors from './loginPageSelectors';
import BasePage from '../basePage';

// Dodaj klasę o nazwie LoginPage

// Na bazie testu DEMO, dodaj metodę o nazwie login

// dodaj parametry do metody które odnoszą się do wartości: email i hasło
export class LoginPage extends BasePage {
	constructor() {
		super();
	}

	login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		cy.get(loginPageSelectors.email).type(email);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.contains(loginPageSelectors.loginBtn).click();
	}

	checkWalidMsg(
		msgSelector = loginPageSelectors.wrongPassWalidMsg,
		elementText = ''
	) {
		cy.get(msgSelector).should('have.text', elementText);
	}

	checkFooter(
		footerText = 'zarządzania testami stworzone przez 21CN. Wszelkie prawa zastrzeżone.  (version 3.1.1085)'
	) {
		cy.get(loginPageSelectors.footer)
			.should('be.visible')
			.should('contain.text', footerText);

		return this;
	}
}

export const loginPage = new LoginPage();
