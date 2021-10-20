import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { tasksPage } from '../../pages/pageObjects/tasksPage/tasksPage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo task page test', function () {
			loginPage.visitPage().login();
			mainPage.goToMenuOpt('Zadania');
		});
	});
});
