import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor() {
		super();
	}

	logOut() {
		cy.get(mainPageSelectors.logoutBtn).click();
	}

	// goToTestBase() {
	// 	cy.get(mainPageSelectors.testBaseMenu).click();
	// }

	// goToTestBase() {
	// 	cy.get(mainPageSelectors.menu).find('li.item5').click();
	// }

	// goToTestBase(menuOptPosition = '5') {
	// 	cy.get(mainPageSelectors.menu).find('li.item' + menuOptPosition).click();
	// }

	goToTestBase(menuOptPosition = '5') {

		// let menuOptionPosition = '5'

		// cy.get(mainPageSelectors.menu).find(`li.item${menuOptionPosition}`).click();

		cy.get(mainPageSelectors.menu).find(`li.item${menuOptPosition}`).click();
	}
}

export const mainPage = new MainPage();
