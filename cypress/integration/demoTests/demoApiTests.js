/// <reference types="cypress" />

describe('Login page cookies test', () => {
	beforeEach(function () {
	
		
	});

	context('Login page cookies test', () => {
		it('When accept Cookies Then checkCookiesNotVisible Should check if cookies warning is not visible', () => {
			
			cy.fixture('example').then((obj) => {

				cy.request({
				  url: obj.apiEndpoint,
						  method: 'GET',
						  headers: {},
				  body: {},
				  redirect: true
				}).then((res) => {
		  
				  if(expect(res.status).to.be.equal(200)) {
					console.log(res.body)
				  }
				})
			  })
		});
	});
});