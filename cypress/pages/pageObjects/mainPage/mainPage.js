
import mainPageSelectors from "./mainPageSelectors";
import BasePage from "../basePage";



class MainPage extends BasePage {

    constructor () {
        super()
    }

    goToAdministrationPage() {
        cy.get(mainPageSelectors.adminPageBtn).click()

        return this
    }
}


export const mainPage = new MainPage()