import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor() {
		super();
	}

	goToTestBase() {
		cy.get(mainPageSelectors.menu).find('li.item5').click();
	}

	myTasks() {
		cy.get(mainPageSelectors.myTasks).should('be.visible')
	}

	
	goToEduTrainings(traingSelector) {
		// cy.get(
		// 	traingSelector
		// ).click();

		if(traingSelector === 'producOwner') {
			cy.get(
				mainPageSelectors.productOwnerExtraTraining
			).click();
		} else if(traingSelector = 'baseIstqb') {
			cy.get(
				mainPageSelectors.istqb31
			).click();
		}
	}

	// goToTestBase(menuOptPosition = '5') {
	// 	cy.get(mainPageSelectors.menu).find('li.item' + menuOptPosition).click();
	// }
}

export const mainPage = new MainPage();
