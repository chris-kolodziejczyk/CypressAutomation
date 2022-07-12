import BasePage from '../basePage';
import mainPageSelectors from './mainPageSelectors';

class MainPage extends BasePage {
	constructor(url = 'http://demo.testarena.pl') {
		super(url);
	}

	checkMainMenu() {
		cy.get(mainPageSelectors.trainings).should('be.visible');
		cy.get(mainPageSelectors.exams).should('be.visible');
		cy.get(mainPageSelectors.services).should('be.visible');
		cy.get(mainPageSelectors.news).should('be.visible');
		cy.get(mainPageSelectors.knowledgeBase).should('be.visible');
		cy.get(mainPageSelectors.eventCalendar).should('be.visible');
		cy.get(mainPageSelectors.becomeTester).should('be.visible');

		cy.get(mainPageSelectors.jobOffer).then((element) => {
			expect(element).to.be.visible;
		});

		return this;
	}

	getToTrainingsCalendar() {
		cy.get(
			'body > section.page-section.py-0.my-0.py-md-4.my-md-4 > div > div > div.col-12.text-center.mt-0.mt-md-2 > a'
		).click();

		return this;
	}

	checkSocialMedia() {
		cy.get(mainPageSelectors.socialFoot)
			.children()
			.each((element) => {
				cy.wrap(element).should('be.visible');
			});

		return this;
	}

	sendRequest() {
		return cy.request({
			url: obj.apiEndpoint,
			method: 'GET',
			headers: {},
			body: {},
			redirect: true,
		});
	}
}

export const mainPage = new MainPage();
