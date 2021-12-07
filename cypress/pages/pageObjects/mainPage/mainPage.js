import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

export class MainPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	checkMainPageElems() {
		cy.get(
			'.contentList > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2)'
		).should('be.visible');
		cy.get(
			'#chart_div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
		).should('be.visible');
		cy.get('article.article_right_box:nth-child(1)').should('be.visible');
	}

	goToTestBase(menuOptinSelector = mainPageSelectors.testBaseMenuLink) {
		cy.get(mainPageSelectors.testBaseMenuLink).click();

		return this;
	}
}

export const mainPage = new MainPage();
