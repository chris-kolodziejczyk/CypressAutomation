/// <reference types="cypress" />

describe('breweries list', () => {
	beforeEach(() => {});

	context('breweries list context', () => {
		it('Log breweries list', () => {
			cy.fixture('example/example').then((obj) => {
				cy.fetch({
					url: obj.apiEndpoint,
					method: 'GET',
					headers: {},
					body: {},
					redirect: true,
				}).then((res) => {
					if (expect(res.status).to.be.equal(200)) {
						console.log(res);
					}
				});
			});
		});
	});
});