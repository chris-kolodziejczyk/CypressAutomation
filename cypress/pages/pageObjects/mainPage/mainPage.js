import mainPageSelectors from "./mainPageSelectors";
import BasePage from "../basePage";


class MainPage extends BasePage {

    // getSelectors(){
    //     return {
    //         testBaseMenuOpt:'.item5 > a:nth-child(1)'
    //     }
    // }
    //
    // Wywołanie:
    // this.getSelectors().testBaseMenuOpt

    goToTestBase(){

        cy.get(mainPageSelectors.testBaseMenuOpt).click();
    }

}


export const mainPage = new MainPage()