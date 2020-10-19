import BasePage from '../basePage';

export class TestBasePage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	getAddTest() {
		cy.get('.button_link_nav').click();

		cy.get('.button_link_li').then((addTestsElems) => {

		
			cy.wrap(addTestsElems).eq(0).click()

			
		});
	}
}

export const testBasePage = new TestBasePage();
