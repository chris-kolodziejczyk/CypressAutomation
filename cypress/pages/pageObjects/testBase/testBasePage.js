import BasePage from '../basePage';
import testBaseSelectors from './testBaseSelectors';

export class TestBasePage extends BasePage{
	constructor() {
		super()
	}

	addTest(
		addOpt = 'testCase',
		nameText = 'Test Krzyśka222',
		descText = 'Test Krzyśka222',
		resultText = 'Test Krzyśka222'
	) {
		cy.get(testBaseSelectors.addTest).click();

		if (addOpt === 'testCase') {
			cy.get(testBaseSelectors.testCase).click();
			cy.get(testBaseSelectors.description).type(descText);
			cy.get(testBaseSelectors.result).type(resultText);
		} else if (addOpt === 'otherTest') {
			cy.get(testBaseSelectors.otherTest).click();
			cy.get(testBaseSelectors.description).type(descText);
		}

		cy.get(testBaseSelectors.name).type(nameText);
		cy.get(testBaseSelectors.save).click();

		return this;
	}

	checkTestAddMsg() {
		// cy.on('window:alert', (str) => {
		// 	expect(str).to.equal(`A new test case has been added.`);
		// });

        cy.get(testBaseSelectors.addTestMsg).should('have.text', 'A new test case has been added.')

		return this;
	}
}

export const testBasePage = new TestBasePage();
