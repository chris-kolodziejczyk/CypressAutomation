/// <reference types="cypress" />

import BasePage from '../basePage';
import testBaseSelectors from './testBaseSelectors';

export class TestBasePage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}

	goToAddTest(testName = 'Przypadek testowy') {
		cy.get(testBaseSelectors.addTests).click();
		cy.get(testBaseSelectors.addTestsList)
			.children()
			.then((addTestsElems) => {
				cy.wrap(addTestsElems).contains(testName).click();
			});
		return this;
	}

	fillTestCaseForm(name, desc, presuppositions, result) {
		cy.get(testBaseSelectors.testName).type(name);
		cy.get(testBaseSelectors.testDescription).type(desc);
		cy.get(testBaseSelectors.testPresuppositions).type(presuppositions);
		cy.get(testBaseSelectors.testResult).type(result);
		cy.get(testBaseSelectors.saveTest).click();
		return this;
	}	
}

export const testBasePage = new TestBasePage();
