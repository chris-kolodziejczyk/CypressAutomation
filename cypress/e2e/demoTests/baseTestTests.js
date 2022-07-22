/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Demo Test Base tests', function () {
	it('Add test case to test base ', function () {
		loginPage.visitPage().login('administrator@testarena.pl', 'sumXQQ72$L');
		mainPage.goToTestBase();
		testBasePage.addTestToTestBAse(
			1,
			'Przypadek testowy',
			`${testBasePage.randomString(1, 'letters')}${testBasePage.randomString(
				10,
				'number'
			)}`,
			testBasePage.randomString(50, 'letters'),
			testBasePage.randomString(30, 'letters')
		);
		testBasePage.checkAddedTest();
	});

	it.only('Add test case to test base ', function () {
		loginPage.visitPage().login('administrator@testarena.pl', 'sumXQQ72$L');
		mainPage.goToTestBase();
		testBasePage.searchTest().checkTestOnList();
		
	});
});
