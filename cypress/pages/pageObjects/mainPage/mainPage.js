import mainPageSelectors from './mainPageSelectors';

export class MainPage {
	constructor() {}

	clickTestBaseOpt(menuOpt = 'Test base') {
		cy.contains(menuOpt).click();
	}
}

export const mainPage = new MainPage();
