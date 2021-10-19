import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

export class MainPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	logOut() {
		cy.get(mainPageSelectors.logOutBtn).click();
		return this;
	}

	goToTestBase() {
		cy.get(mainPageSelectors.testBaseMenuOpt).click();
		return this;
	}
}

export const mainPage = new MainPage();
