/// <reference types="cypress" />

describe('breweries list', () => {
	beforeEach(() => {});

	context('breweries list context', () => {
		it('Log breweries list', () => {
			cy.fixture('example/example').then((obj) => {
				cy.request({
					url: obj.apiEndpoint,
					method: 'GET',
					redirect: true,
				}).then((res) => {
					if (expect(res.status).to.be.equal(200)) {
						console.log(res.statusText);

						assert.strictEqual(res.statusText, 'OK')

					}
				});
			});
		});
	});
});
