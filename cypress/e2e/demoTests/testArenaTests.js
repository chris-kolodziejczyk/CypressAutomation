/// <reference types="cypress" />
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { testBasePage } from '../../pages/pageObjects/testBasePage/testBasePage';
let testName;

describe('Demo add tests to test base', function () {
	it.only('Add test case to test base1X', function () {
		loginPage.visitPage();
		loginPage.login();

		mainPage.goToMenuOption();


        cy.fixture("example/example")

        cy.readFile('cypress/fixtures/example/example.json').then((txt)=> {

           console.lo(txt)
        })

		testBasePage.addTestToTestBase(
			1,
			'Przypadek testowy',
			'Moje testy Krzysiek1111111',
			'Jakiś opis',
			'Jakiś rezultat'
		);

		testBasePage.checkAddedTest();
	});

	it('Add test case to test base', function () {
		loginPage.visitPage();
		loginPage.login();

		mainPage.goToMenuOption();
		testBasePage.searchTest(testName);
	});
});

describe('Demo add tests to test base1', function () {

    beforeEach(() => {
        loginPage.visitPage()
        loginPage.login();
        mainPage.goToMenuOption();
    });

	context('exist test', function(){

        beforeEach(() => {
        
            testBasePage.addTestToTestBase(
                1,
                'Przypadek testowy',
                'Moje testyrggergeswfr5',
                testBasePage.randomString(300),
                testBasePage.randomString(300)
            );
    
            testName = 'Moje testyrggergeswfr5';
        });

        it('Add test case to test base', function () {
            testBasePage.searchTest(testName).checkTestOnList(testName);
        });
    })
	
});
