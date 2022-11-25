import mainPageSelectors from './mainPageSelectors';

class MainPage {
	constructor() {}

	goToTestBase() {
		cy.get(mainPageSelectors.testBaseMenu).click();
	}
}

export let mainPage = new MainPage();
