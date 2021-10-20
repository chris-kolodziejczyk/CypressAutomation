/// <reference types="cypress" />

import BasePage from '../basePage';
import tasksPageSelectors from './tasksPageSelectors';

export class TasksPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	selectEnvironmentAndVersion(
		environmentName,
		envListIndex,
		verionName,
		versionListIndex
	) {
		cy.get(tasksPageSelectors.environments).type(environmentName);
		cy.wait(2000);
		cy.get(tasksPageSelectors.environmentsList)
			.children()
			.then((environmentElems) => {
				cy.wrap(environmentElems).find('li').eq(envListIndex).click();
			});

		cy.get(tasksPageSelectors.version).type(verionName);
		cy.wait(2000);
		cy.get(tasksPageSelectors.versionList)
			.children()
			.then((versionListElems) => {
				cy.wrap(versionListElems).find('li').eq(versionListIndex).click();
			});

		return this;
	}

	selectPriority(priorityName) {
		cy.get(tasksPageSelectors.priority).select(priorityName);
		return this;
	}

	releaseDate(date) {
		cy.get(tasksPageSelectors.dueDate).type(date);
		return this;
	}

	assignTo(choose, name, assignToListIndex) {
		if (choose === 'me') {
			cy.get(tasksPageSelectors.assignToMe).click();
		} else if (choose === 'other') {
			cy.get(tasksPageSelectors.assigneeName).type(name);
			cy.wait(2000);
			cy.get(tasksPageSelectors.assignToList)
				.children()
				.then((assignToElems) => {
					cy.wrap(assignToElems).eq(assignToListIndex).click();
				});
		}

		return this;
	}

	closeTaskForm(opt) {
		if (opt === 'cancel') {
		} else {
			cy.get(tasksPageSelectors.save).click();
		}

		return this;
	}

	checkAddTaskConfirmation() {
		cy.get(tasksPageSelectors.taskConfirmationTxt).should(
			'contain',
			'Zadanie zostało dodane'
		);

		return this;
	}

	fillTaskForm(
		title,
		description,
		releaseName,
		environmentName,
		envListIndex,
		versionName,
		versionListIndex,
		priorityName,
		date,
		choose,
		name,
		assignToListIndex,
		closeOpt
	) {
		cy.get(tasksPageSelectors.addTask).click();
		cy.get(tasksPageSelectors.title).type(title);
		cy.get(tasksPageSelectors.description).type(description);
		cy.get(tasksPageSelectors.releaseName).type(releaseName);
		this.selectEnvironmentAndVersion(
			environmentName,
			envListIndex,
			versionName,
			versionListIndex
		)
			.selectPriority(priorityName)
			.releaseDate(date)
			.assignTo(choose, name, assignToListIndex)
			.closeTaskForm(closeOpt);
		cy.wait(2000);

		return this;
	}
}

export const tasksPage = new TasksPage();
