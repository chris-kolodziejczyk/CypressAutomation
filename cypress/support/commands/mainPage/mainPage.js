
let selectors = () => {

    return {
        
    }
}


Cypress.Commands.add(
	'goToCart',
	() => {
		cy.get('selector').click()
	}
);

Cypress.Commands.add(
	'getMenuOption',
    (menuItem = 'Blog') => {

        let menuItems = {
            Shop: '142',
            Blog: '163'
        }

        cy.get(mainPageSelectors.desktopMenu).find('#menu-item-' + menuItems[menuItem]).click();
    }
);