import BasePage from '../basePage'
import loginPageSelectors from './loginPageSelectors';


class LoginPage extends BasePage{

    constructor() {
        super()
    }


    // getLoginPageSelectors() {

    //     return {
    //         loginBtn:'#login',
    //         email:'#email',
    //         password:'#password',
    //         loginFormErrorMsg: '.login_form_error'
    //     }
    // }

    // login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
    //     cy.get(this.getLoginPageSelectors().email).type(email);
    //     cy.get(this.getLoginPageSelectors().password).type(pass);
    //     cy.get(this.getLoginPageSelectors().loginBtn).contains('Zaloguj').click();
    // }


    login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
        cy.get(loginPageSelectors.email).type(email);
        cy.get(loginPageSelectors.password).type(pass);
        cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click();
    }

    checkValidMsg(validMsg = 'Adres e-mail i/lub hasło są niepoprawne.') {

        cy.get(loginPageSelectors.loginFormErrorMsg).should('be.visible').and('have.text', validMsg)
    }

    // constructor(url) {
    //     super(url)
    // }

}

export const loginPage = new LoginPage()