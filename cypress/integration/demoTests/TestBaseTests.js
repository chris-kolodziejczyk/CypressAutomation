import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { testBasePage } from '../../pages/pageObjects/testBase/testBasePage';

describe('Demo TestArena Tests', function () {
	context('Demo tests', () => {
		it.only('Demo test base page test', function () {
			loginPage.visitPage().login();
			mainPage.goToTestBase();
			testBasePage
				.goToAddTest()
				.fillTestCaseForm(
					testBasePage.randomString(10, 'letters'),
					testBasePage.randomString(10, 'letters'),
					'',
					testBasePage.randomString(10, 'letters')
				);
		});
	});
});
