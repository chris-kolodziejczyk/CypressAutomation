
import loginPageSelectors from "./loginPageSelectors";
import BasePage from "../basePage";



class LoginPage extends BasePage {

    // jeżeli nawias super jest pusty to
    // wartość parametru url nie zmienia się
    // constructor (url = 'http://demo.testarena.pl') {
    //     super(url)
    // }
    constructor () {
        super()
    }

    login(emailLogin = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
        cy.get(loginPageSelectors.email).type(emailLogin);
        cy.get(loginPageSelectors.password).type(pass);		
        cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click()

         return this
    }
}


export const loginPage = new LoginPage()