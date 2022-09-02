let a = 'Krzysztof ma certyfikat ISTQB FL'; // 'Krzysztof'

a = 3;

// console.log('Krzysztof Kołodziejczyk');

class Main {
	logText() {
		console.log('Krzysztof Kołodziejczyk');

		// Zasięg blokowy
		let a = 'a';

		// Zasięg funkcyjny
		() => {
			let a = 'a';
		};
	}

	logVariableType(
		name = 'Krzysztof',
		myNum = 2,
		myListElem = 4,
		myObjElem = () => {}
	) {
		let myName = console.log(name);
		let num = console.log(myNum);
		let myList = console.log([myListElem]);
		let myObject = console.log({ key1: myObjElem });

		myName;
		num;
		myList;
		myObject;
	}
}

// new tworzy kopię klasy, po funkcji i metodzie musi być nawias okrągły
new Main().logVariableType('Krzysztof', 87, 5, () => {});

new Main().logVariableType('Marek', 98, 67, 'Moja książka');
