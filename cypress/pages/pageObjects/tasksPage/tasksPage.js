import BasePage from '../basePage';
import tasksPageSelectors from './tasksPageSelectors';

export class TasksPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}


}

export const tasksPage = new TasksPage();
