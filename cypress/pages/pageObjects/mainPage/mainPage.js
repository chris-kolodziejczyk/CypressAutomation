import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor() {
		super();
	}

	logOut() {
		cy.get(mainPageSelectors.logoutBtn).click();
	}

	goToTestBase() {
		cy.get(mainPageSelectors.testBaseMenu).click();
	}
}

export const mainPage = new MainPage();
