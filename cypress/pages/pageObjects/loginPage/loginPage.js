import loginPageSelectors from "./loginPageSelectors";
import BasePage from "../basePage";



class LoginPage extends BasePage {


    login(testContext = 'empty',email = '', pass = '') {

        if(testContext === 'proper') {

            cy.get(loginPageSelectors.login).type(email);
            cy.get(loginPageSelectors.pass).type(pass);
            cy.get(loginPageSelectors.loginBtn).click();

        } else if(testContext === 'empty') {

            cy.get(loginPageSelectors.loginBtn).click();
        } else {
            throw Error('Komunikat błędu')
        }
    }
}


export const loginPage = new LoginPage()