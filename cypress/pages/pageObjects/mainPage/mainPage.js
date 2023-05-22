import mainPageSelectors from "./mainPageSelectors";
import BasePage from "../basePage";

export class MainPage extends BasePage{


    getSelectors() {

        return {
            
        }
    }

    getMenuOption(menuItem = 'Blog') {

        let menuItems = {
            Shop: '142',
            Blog: '163'
        }

        cy.get(mainPageSelectors.desktopMenu).find('#menu-item-' + menuItems[menuItem]).click();
    }

    goToCart() {
        cy.get(mainPageSelectors.cartBtn).click();
    }
}

export let mainPage = new MainPage()