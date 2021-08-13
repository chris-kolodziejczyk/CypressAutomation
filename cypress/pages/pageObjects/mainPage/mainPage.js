import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

export class MainPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

    
	logout() {
		cy.get(mainPageSelectors.logOutIcon).should('be.visible').click();
	}

    clickMenuOption() {
        cy.get(mainPageSelectors.testBase).click()
    }
}

export const mainPage = new MainPage();
