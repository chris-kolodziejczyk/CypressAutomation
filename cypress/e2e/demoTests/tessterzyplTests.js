/// <reference types="cypress" />

let example;

import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { trainingsCalendar } from '../../pages/pageObjects/trainingsCalendar/trainingsCalendar';
describe('Demo Testerzy.pl Tests', function () {

    after(() => {


    })

	beforeEach(() => {


    });

	it('#1 Demo menu test', function () {
		mainPage.visitPage('https://testerzy.pl/');
		mainPage.checkMainMenu();
	});

	it.only('#2 Demo footer social media test', function () {
		mainPage
			.visitPage('https://testerzy.pl/')
			.sendRequest()
			.then((respons) => {
				mainPage.checkSocialMedia();
			});
	});
});
