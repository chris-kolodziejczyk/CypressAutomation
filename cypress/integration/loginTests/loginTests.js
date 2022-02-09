/// <reference types="cypress" />

import {loginPage} from '../../pages/pageObjects/loginPage/loginPage'

describe('Demo TestArena Tests', function () {
	it.only('Demo login remember me test', function () {
		
        loginPage.visitPage()

        loginPage.login()


	});
});