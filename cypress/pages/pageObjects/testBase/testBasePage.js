import testBasePageSelectors from "./testBaseSelectors";
import BasePage from "../basePage";



class TestBasePage extends BasePage {


    // addTestToTestBase(testName = 255, testDesc = 5000, testRes = 1000) {

    //     cy.get(testBasePageSelectors.addBtn).click();
    //     cy.get(testBasePageSelectors.addTestOpt)
    //         .find('li')
    //         .contains('Przypadek testowy')
    //         .click();

    //     // cy.get('div.button_link_ul > div:nth-child(2) > ul:nth-child(1)>*')
    //     // .contains('Przypadek testowy')
    //     // .click();
    //     cy.get(testBasePageSelectors.testName).type(this.randomString(testName));
    //     cy.get(testBasePageSelectors.testDesc).type(this.randomString(testDesc));
    //     cy.get(testBasePageSelectors.testResult).type(this.randomString(testRes));
    //     cy.get(testBasePageSelectors['saveBtn']).click();
    // }

        addTestToTestBase() {
            cy.get(testBasePageSelectors.addBtn).click();
            cy.get(testBasePageSelectors.addTestOpt)
                .find('li')
                .contains('Przypadek testowy')
                .click();
            cy.fixture('example/testBaseData').then((dataObject) => {
                // cy.get('div.button_link_ul > div:nth-child(2) > ul:nth-child(1)>*')
                // .contains('Przypadek testowy')
                // .click();
                cy.get(testBasePageSelectors.testName).type(this.randomString(dataObject.testName));
                cy.get(testBasePageSelectors.testDesc).type(this.randomString(dataObject.testDesc));
                cy.get(testBasePageSelectors.testResult).type(this.randomString(dataObject.testResult));
            
            })
            cy.get(testBasePageSelectors['saveBtn']).click();

            return this
        }


        checkAddTest() {

            cy.get(testBasePageSelectors.jInfoBox).should('be.visible');
			cy.get(testBasePageSelectors.pJInfoBox).should(
				'have.text',
				'Przypadek testowy został dodany.'
			);

            return this
        }
}


export const testBasePage = new TestBasePage()