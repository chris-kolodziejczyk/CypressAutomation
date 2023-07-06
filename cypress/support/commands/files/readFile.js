/// <reference types="cypress" />

Cypress.Commands.overwrite(
	'readDataFromFile',
	(filePath = 'cypress/lib/przykładowyPlik.txt', encoding, readOptions) => {
		cy.readFile(filePath, encoding, readOptions);
	}
);
