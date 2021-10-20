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

	goToMenuOpt(menuOpt = 'Baza testów') {
		cy.get(mainPageSelectors.menuList)
			.children()
			.then((mainMenuElems) => {
				cy.wrap(mainMenuElems).contains(menuOpt).click();
			});
		return this;
	}
}

export const mainPage = new MainPage();
