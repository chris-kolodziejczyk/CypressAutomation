import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor() {
		super();
	}

	goToTestBase() {
		cy.get(mainPageSelectors.menu).find('li.item5').click();
	}

	// goToTestBase(menuOptPosition = '5') {
	// 	cy.get(mainPageSelectors.menu).find('li.item' + menuOptPosition).click();
	// }
}

export const mainPage = new MainPage();
