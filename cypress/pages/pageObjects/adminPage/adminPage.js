import BasePage from '../basePage';
import adminPageSelectors from './adminPageSelectors';

class AdminPage extends BasePage {
	constructor() {
		super();
	}

	goToAddRole() {
		cy.get(adminPageSelectors.role).click();
		cy.get(adminPageSelectors.addRole).click();
	}

	addRole() {
		cy.get(adminPageSelectors.name).type('rrwverv');
		cy.get(adminPageSelectors.templateList).select('TESTER');
		cy.get(adminPageSelectors.projectInput).type('PI');
		cy.wait(500);
        cy.get(adminPageSelectors.projectInput).type('{enter}');
		// for (let element in cy.get(adminPageSelectors.checkRole)) {
			// console.log(
				cy.get(adminPageSelectors.checkRole).then((listOfElements) => {
					// cy.wrap(listOfElements).find('input').eq(1).check('1');
                    cy.wrap(listOfElements + '>input').check(['1', '8', '9']);
				})
			// );
		// }
		// cy.get(adminPageSelectors.checkRole)
	}
}

export const adminPage = new AdminPage();
