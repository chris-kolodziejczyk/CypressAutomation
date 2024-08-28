/// <reference types="cypress" />

describe('breweries list', () => {
	beforeEach(() => {});

	context('breweries list context', () => {
		it('Log breweries list', () => {
			cy.fixture('example/example').then((obj) => {
				cy.request({
					url: 'https://jsonplaceholder.typicode.com/posts',
					method: 'POST',
					redirect: true,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
					body: {
						title: 'foo',
						body: 'bar',
						userId: 1,
					},
				}).then((res) => {
					if (expect(res.status).to.be.equal(201)) {
						console.log(res.body.userId);
					}
				});
			});
		});
	});
});
