import BasePage from '../basePage';
import testBaseSelectors from './testBaseSelectors';

export class TestBasePage extends BasePage {
	goToTest(testName = 'Przypadek testowy') {
		cy.get('.popbox.button_link_ul').click();
		cy.get('#content > article > nav > ul > div > div > ul>*')
			.contains(testName)
			.click();

		return this;
	}

	fillTestForm(
		testName,
		nameText = '',
		descText = '',
		resultText = '',
		testDuration = '',
		testCardText = ''
	) {
		cy.get(testBaseSelectors.name).type(nameText);

		if (testName === 'Przypadek testowy') {
			cy.get(testBaseSelectors.desc).type(descText);
			cy.get(testBaseSelectors.result).type(resultText);
		} else if (testName === 'Test automatyczny') {
			cy.get(testBaseSelectors.desc).type(descText);
		} else if (testName === 'Test eksploracyjny') {
			cy.get(testBaseSelectors.testDuration).type(testDuration);
			cy.get(testBaseSelectors.testCard).type(testCardText);
		}

		cy.get(testBaseSelectors.testDuration).click();

		switch (testName) {
			case 'Przypadek testowy':
				cy.get(testBaseSelectors.desc).type(descText);
				cy.get(testBaseSelectors.result).type(resultText);
				break;
			case 'Test automatyczny':
				cy.get(testBaseSelectors.desc).type(descText);
				break;
		}

		return this;
	}
}

export const testBasePage = new TestBasePage();
