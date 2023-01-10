/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';

describe('Demo TestArena Tests', function () {
	it('Demo login test', function () {
		loginPage.visitPage();
		loginPage.login();
		loginPage.checkLogin();
	});

	it('Demo logout test', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.logOut();

		cy.url().should('include', '/zaloguj');
	});

	it('Demo add test to test base', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.goToTestBase();
		testBasePage.addTestToTestBase(
			1,
			'Przypadek testowy',
			testBasePage.randomString(200),
			testBasePage.randomString(300),
			testBasePage.randomString(500)
		);
		testBasePage.checkAddedTest();
	});

	it('Demo add test with to long data', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.goToTestBase();
		testBasePage.addTestToTestBase(
			1,
			'Przypadek testowy',
			testBasePage.randomString(5000),
			'dvgrgrg',
			'gergergre'
		);
		testBasePage.checkAddedTest();
	});

	it('Demo add test with short string', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.goToTestBase();
		testBasePage.addTestToTestBase(
			1,
			'Przypadek testowy',
			testBasePage.randomString(2),
			testBasePage.randomString(555),
			testBasePage.randomString(2)
		);
		testBasePage.checkAddedTest();
	});

	it('Demo add test with short string', function () {
		loginPage.visitPage();
		loginPage.login();
		mainPage.goToTestBase();
		testBasePage.searchTest().checkTestOnList();
	});

	it.only('Demo false login test', function () {
		cy.fixture('example/example').then((obj) => {
			loginPage.visitPage();
			loginPage.login(obj.falseEmail, obj.falsePass);
			cy.get(
				'div.formContainer:nth-child(2) > span:nth-child(1) > div:nth-child(3)'
			).should(
				'have.text',
				'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
			);
		});
	});
});
