import mainPageSelectors from './mainPageSelectors';

export class MainPage {
	constructor() {}

	clickTestBaseOpt(menuOpt = 'Test base') {
		cy.contains(menuOpt).click();
	}

	logut() {
		cy.get('.header_logout').click();
	}

	viewAllMsg() {
		cy.get(mainPageSelectors.showAllMsg).click();
	}
}

export const mainPage = new MainPage();
