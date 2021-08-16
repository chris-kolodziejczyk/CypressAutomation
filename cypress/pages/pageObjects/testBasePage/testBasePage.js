import BasePage from '../basePage';
import testBaseSelectors from './testBaseSelectors';

export class TestBasePage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	goToAddTest(optionNum = 2) {
		cy.get(testBaseSelectors.testListBtn).should('be.visible').click();
		cy.get(testBaseSelectors.testOptionList)
			.children()
			.then((testsOptions) => {
				cy.wrap(testsOptions).eq(optionNum).click();
			});

		return this;
	}

	fillTestForm(
		parameters = {
			testName: 'name',
			testDesc: 'desc',
			duration: '30',
			position1: 'Position',
			position2: 'Position',
			position3: 'Position',
			position4: 'Position',
			position5: 'Position',
		}
	) {
		cy.get(testBaseSelectors.testName).type(parameters.testName);

		cy.url().then((urlTxt) => {
			if (urlTxt === 'http://demo.testarena.pl/LITD/test/add_automatic_test') {
				cy.get(testBaseSelectors.testDescription).type(parameters.testDesc);
			} else if (
				urlTxt === 'http://demo.testarena.pl/LITD/test/add_exploratory_test'
			) {
				cy.get(testBaseSelectors.testCard).type(parameters.testDesc);
				cy.get(testBaseSelectors.duration).type(parameters.duration);
			} else if (
				urlTxt === 'http://demo.testarena.pl/LITD/test/add_checklist'
			) {
				// Zamienić na pętle
				// cy.contains('Dodaj pozycję').click();
				// cy.get(testBaseSelectors.position3).type(parameters.position1);
				// cy.contains('Dodaj pozycję').click();
				// cy.get(testBaseSelectors.position4).type(parameters.position2);
				// cy.contains('Dodaj pozycję').click();
				// cy.get(testBaseSelectors.position5).type(parameters.position3);
				// cy.contains('Dodaj pozycję').click();
				// cy.get(testBaseSelectors.position6).type(parameters.position4);
				// cy.contains('Dodaj pozycję').click();
				// cy.get(testBaseSelectors.position7).type(parameters.position5);
				for (let i = 1; i <= 5; i++) {
					cy.contains('Dodaj pozycję').click();
					cy.get(testBaseSelectors[`position${i + 2}`]).type(
						parameters[`position${i}`]
					);
				}
			}
			cy.contains('Zapisz').click();
		});

		return this;
	}

	checkAddTest(desc = 'Test automatyczny został dodany.') {
		cy.get(testBaseSelectors.infoBox).should('contain', desc);

		return this;
	}
}

export const testBasePage = new TestBasePage();
