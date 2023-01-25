/// <reference types="cypress" />

import BasePage from '../basePage';
import testBasePageSelectors from './testBaseSelectors';

class TestBasePage extends BasePage {
	constructor() {
		super();
	}

	addTestToTestBase(
		testListIndex = 1,
		testName = 'Przypadek testowy',
		name = '',
		desc = '',
		result = ''
	) {
		cy.get(testBasePageSelectors.add).click();

		//funkcja eq pozwala odwołać się do elementu na liście elementów
		cy.get(testBasePageSelectors.testslist)
			.eq(testListIndex)
			.contains(testName)
			.click();

		cy.get(testBasePageSelectors.name).type(name);

		if (testName === 'Test automatyczny') {
			cy.get(testBasePageSelectors.description).type(desc);
		} else if (testName === 'Przypadek testowy') {
			cy.get(testBasePageSelectors.description).type(desc);
			cy.get(testBasePageSelectors.result).debug()
		}

		console.log(`Moje logowanie:${name}`)
		cy.debug()
		cy.get(testBasePageSelectors.submit).click();
		
	}

	checkAddedTest() {
		cy.get(testBasePageSelectors.baseTestInfoBox)
			.should('be.visible')
			.invoke('text')
			.then((testInfoBoxTxt) => {
				expect(testInfoBoxTxt).to.include('Przypadek testowy został dodany.');
			});

		// cy.get(testBasePageSelectors.baseTestInfoBox).then((element) => {
		// 	cy.log( element.text())

		// });

		// .and('contain.text', 'został dodany.');
	}

	searchTest(testName = 'Moje testy') {
		cy.get(testBasePageSelectors.search).type(testName);
		cy.get(testBasePageSelectors.searchBtn).click();

		return this;
	}

	checkTestOnList(testName = 'Moje testy') {
		cy.get(testBasePageSelectors.addedTestList)
			.children()
			.each((element) => {
				if (cy.wrap(element).contains(testName)) {
					cy.wrap(element)
						.should('exist')
						.and('be.visible')
						.and('include.text', testName);
				} else {

					throw Error('Test not added to test list')
				}
			});

		return this;
	}
}

export const testBasePage = new TestBasePage();
