import BasePage from "../basePage";
import loginPageSelectors from "./loginPageSelectors";



export class LoginPage extends BasePage{

    getLoginPageSelectors() {

        return {
            email: '#email',
            pass: '#password',
            loginBtn: '#login',
        };
    }

    login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
        cy.get(loginPageSelectors.email).type(email);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.contains('Zaloguj').click()

        return this
    }
}

export const loginPage = new LoginPage()