/// <reference types="cypress" />

Cypress.Commands.add(
	'readDataFromFile',
	(filePath = 'cypress/lib/przykładowyPlik.txt', encoding, readOptions) => {
		cy.readFile(filePath, encoding, readOptions);
	}
);
