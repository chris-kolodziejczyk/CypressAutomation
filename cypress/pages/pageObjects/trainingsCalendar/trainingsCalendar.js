import BasePage from '../basePage';
import trainingsCalendarSelectors from './trainingCalendarSelector';

class TrainingsCalendar {
	constructor() {}

	getTrainingsOptions(trainingTypeIndex, trainingIndex) {
		cy.get(trainingsCalendarSelectors.trainingTypeContainer).click();
		cy.get(trainingsCalendarSelectors.trainingType)
			.children()
			.eq(trainingTypeIndex)
			.click();
		cy.get(trainingsCalendarSelectors.trainingNameContainer).click();
		cy.get(trainingsCalendarSelectors.trainingName)
			.children()
			.eq(trainingIndex)
			.click();
	}
}

export const trainingsCalendar = new TrainingsCalendar();
