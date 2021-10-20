/// <reference types="cypress" />

import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { tasksPage } from '../../pages/pageObjects/tasksPage/tasksPage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo task page test', function () {
			loginPage.visitPage().login();
			mainPage.goToMenuOpt('Zadania');
			tasksPage
				.fillTaskForm(
					tasksPage.randomString(10, 'letters'),
					tasksPage.randomString(10, 'letters'),
					tasksPage.randomString(10, 'letters'),
					'2',
					1,
					'2',
					1,
					'Krytyczny',
					'2020-06-06 23:59',
					'me'
				)
				.checkAddTaskConfirmation();
		});
	});
});
