Cypress.Commands.add('login', (email, pass) => {
	cy.get('#email').type(email);
	cy.get('#password').type(pass);
	cy.contains('Zaloguj').click();
});


