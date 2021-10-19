import BasePage from '../basePage';
import loginPageSelectors from './loginPageSelectors';

export class LoginPage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}
}

export const loginPage = new LoginPage();
