import releasesSelectors from './releasesSelectors';

export class ReleasesPage {
	constructor() {}

	clickTestBaseOpt() {
		cy.get(releasesSelectors.releaseAddBtn).click();
	}

	addRelease(
		name = 'Moje testowe wydanie - Krzysiek',
		startDate = '2022-01-13',
		endDate = '2022-01-21'
	) {
		cy.get(releasesSelectors.name).type(name);
		cy.get(releasesSelectors.startDate).type(startDate);
		cy.get(releasesSelectors.endDate).type(endDate);
		cy.get(releasesSelectors.save).click();
	}

	checkReleasesElement() {
		cy.get(releasesSelectors.releaseHeader).should('be.visible');
	}
}

export const releasesPage = new ReleasesPage();
