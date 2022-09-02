import BasePage from '../basePage';

export class MainPage extends BasePage {
	logout() {
		cy.get('.header_logout > a').click();
	}

	clickMenuOption() {
		cy.get('#wrapper > ul > li.item5').click();
	}
}

export const mainPage = new MainPage();
