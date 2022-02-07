const { extend } = require('cypress/types/jquery');

class BasePage {
	printText(myName) {
		console.log(myName);
	}
}

class LogiPage extends BasePage {

	getUserName() {
        return 'Krzysiek'
    }


	printUserLogin() {
		this.printText(this.getUserName() + '@gmail.com');
	}
}

class MainPage extends BasePage {
	logActiveUser() {
		this.printText('Krzysiek');
	}
}
