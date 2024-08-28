import testBasePageSelectors from "./testBaseSelectors";
import BasePage from '../basePage'


class TestBasePage extends BasePage{

    constructor() {
        super()
    }


    addTestToTestBase(
		testListIndex,
		testName = 'Test automatyczny',
		name,
		desc,
		result
	) {
		cy.get(testBasePageSelectors.add).click();
		cy.get(testBasePageSelectors.testslist)
			.eq(testListIndex)
			.contains(testName)
			.click();
		cy.get(testBasePageSelectors.name).type(name);

		if (testName === 'Test automatyczny') {
			cy.get(testBasePageSelectors.description).type(desc);
		} else if (testName === 'Przypadek testowy') {
			cy.get(testBasePageSelectors.description).type(desc);
			cy.get(testBasePageSelectors.result).type(result);
		}

		cy.get(testBasePageSelectors.submit).click();

		return this
	}

	checkAddedTest() {
		cy.get(testBasePageSelectors.baseTestInfoBox).should(
			'contain.text',
			'został dodany.'
		);

		return this
	}
}

export const testBasePage = new TestBasePage()