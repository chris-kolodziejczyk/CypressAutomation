import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

export class MainPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	logOut() {
		cy.get(mainPageSelectors.logOutBtn).click();
	}
}

export const mainPage = new MainPage();
