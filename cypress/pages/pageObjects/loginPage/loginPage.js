import loginPageSelectors from './loginPageSelectors'
import BasePage from '../basePage';

class LoginPage extends BasePage{

    constructor() {

        super()
    }


    getSelectors() {
        return {
            loginBtn:'#login',
            email:'#email',
            password:'#password',
            loginFormErrorMsg: '.login_form_error'
        }
    }

    login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {

        cy.get(this.getSelectors().email).type(email);
        cy.get(loginPageSelectors.password).type(pass);
        cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click();

        return this
    }
}

export const loginPage = new LoginPage()