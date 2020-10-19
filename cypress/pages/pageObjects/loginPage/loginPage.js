import BasePage from '../basePage';

export class LoginPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	loginToTestArena(email, pass) {
		// this.visitPage() - this wskazuje na kalsę BasePage

		cy.get('#email').type(email);
		cy.get('#password').type(pass);
		cy.contains('Zaloguj').click();
	}
}

export const loginPage = new LoginPage();
