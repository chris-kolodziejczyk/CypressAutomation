import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo main page test', function () {
			loginPage.visitPage().login();
		});
	});
});
