/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';
import { mainPage } from '../../pages/pageObjects/mainPage/mainPage';
import { myMsgPage } from '../../pages/pageObjects/MyMsgPage/myMsgPage';

describe('Demo TestArena Tests', function () {
	it('Demo login remember me test', function () {
		loginPage.visitPage().login();
		mainPage.viewAllMsg();
		myMsgPage.clickMsg(3).typeMsg().clickAnswer().checkMsgList(48);
	});
});
