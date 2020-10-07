describe('Login page cookies test', () => {
	beforeEach(function () {
		console.log(Cypress.env());
		loginPage.visitPage();
	});

	context('Login page cookies test', () => {
		it('When accept Cookies Then checkCookiesNotVisible Should check if cookies warning is not visible', () => {
			loginPage.acceptCookies().checkCookiesNotVisible();
		});
	});
});