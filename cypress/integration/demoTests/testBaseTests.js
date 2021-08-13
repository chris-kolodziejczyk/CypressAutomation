/// <reference types="cypress" />

import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Login page scenario', () => {
	beforeEach(function () {
		testBasePage.visitPage();
	});

	context('Add automation test to test base', () => {
		it('Add test to test base', () => {
			loginPage.login();
			mainPage.clickMenuOption();
			testBasePage.goToAddTest().fillTestForm({}).checkAddTest();
		});

		it('Add exploratory test to test base', () => {
			loginPage.login();
			mainPage.clickMenuOption();
			testBasePage
				.goToAddTest(0)
				.fillTestForm({
					testName: testBasePage.randomString(),
					testDesc: testBasePage.randomString(),
					duration: testBasePage.randomString(2, 'number'),
				})
				.checkAddTest('Test eksploracyjny został dodany.');
		});

		it.only('Add check list to test base', () => {
			loginPage.login();
			mainPage.clickMenuOption();
			testBasePage
				.goToAddTest(3)
				.fillTestForm({
					testName: testBasePage.randomString(),
					position1: testBasePage.randomString(),
					position2: testBasePage.randomString(),
					position3: testBasePage.randomString(),
					position4: testBasePage.randomString(),
					position5: testBasePage.randomString(),
				})
				.checkAddTest('Lista kontrolna została dodana.');
		});
	});
});
