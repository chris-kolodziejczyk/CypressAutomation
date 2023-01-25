import BasePage from "../basePage";
import loginPageSelectors from "./loginPageSelectors";


class LoginPage extends BasePage{

    login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L'){
        cy.get(loginPageSelectors.email).type(email);
        cy.get(loginPageSelectors.password).type(pass);
        cy.get(loginPageSelectors.loginBtn).click();
    };
}

export const loginPage = new LoginPage()