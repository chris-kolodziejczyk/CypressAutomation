import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor() {
		super();
	}

	logOut() {
		cy.get(mainPageSelectors.logoutBtn).click();
	}

	goToTestBase(menuOption = 'Baza testów') {
		// cy.get(mainPageSelectors.testBaseMenu).click();
		cy.get('.menu')
			.children()
			.then(
				(menuElems) => {
				cy.wrap(menuElems).contains(menuOption).click()
			}
			);
	}
}

export const mainPage = new MainPage();
