import BasePage from '../basePage';

export class MainPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	logOut() {
		cy.get('.header_logout').click();
	}
}

export const mainPage = new MainPage();
