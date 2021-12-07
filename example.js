let example = 3




class Main {

	
	getUserData() {

		let userData = {

			name: 'Krzysztof',
			lastName:'Kołodziejczyk'
		}

		return userData
	}


	logEampleText() {
		const log = console.log('Moje imię to: Krzysztof');
		let example = 3
		log;
	}

	logMyName() {
		let myName = 'Krzysztof';
		let a = 9;

		let myNewName = myName.toUpperCase().charAt(5);

		a = '';

		switch (a) {
			case 9:
				console.log('a jest poprawne');
				break;
			case 6:
				console.log('a zmieniło wartość');
				break;
			default:
				console.log('Niepoprawna wartość dla a' + ' ' + a);
		}
	}

	getlogList() {
		const biblioteka = [['E.A.Poe', ['Zbiór opowiadań'], [679]]];

		console.log(biblioteka[0][0].replace('E.A.Poe', 'Mickiewicz'));

		console.log(biblioteka[0][1][0].replace('E.A.Poe', 'Dzieło'));

		console.log(biblioteka[0][2][0].toString().replace(679, 456));

		return biblioteka;
	}

	login(loginSelector, passSelector, login, pass, loginBtnSelector) {
		console.log(myName);
	}
}

// new Main().logEampleText();

let logTxt = (callback) => {
	let text = 'txt';

	callback(text);
};

let logNewTxt = () => {
    
	logTxt((text) => {
		console.log(text);
	});
};

logNewTxt()