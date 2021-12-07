import BasePage from '../basePage';
import testBasePageSelectors from './testBasePageSelectors';

export class TestBasePage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	addTestCase(testNameLength, descLength, resultLength) {
		cy.get(testBasePageSelectors.addList).click();

		cy.get(testBasePageSelectors.testCaseOption).click();
		cy.get(testBasePageSelectors.name).type(
			this.randomString(testNameLength, 'letters')
		);

		cy.get(testBasePageSelectors.description).type(
			this.randomString(descLength, 'letters')
		);
		cy.get(testBasePageSelectors.result).type(
			this.randomString(resultLength, 'letters')
		);
		cy.get(testBasePageSelectors.addBtn).click();

		return this;
	}

	checkAddTestCase() {
		cy.get(testBasePageSelectors.pageList).click();
		cy.get(testBasePageSelectors.firstTestInList).should('be.visible');

		return this;
	}
}

export const testBasePage = new TestBasePage();
