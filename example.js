// zasięg globalny
const myName1 = 'Krzysztof';
// myName1 = 2
let myNewName = myName1.replace('Krzysztof', 'Marek');

class Main {
	logText1() {
		// blokowy
		let myName = 'Krzysztof';


		let myNewName = () => {
			// funkcyjny
			let myNumber = 7;
			console.log(myNumber);
			return (myName = 'Marek');
		};

		console.log(myName);
	}

	logText(myName) {
		console.log(myName);
	}
}

new Main().logText()
new Main().logText1()





const osoby = ['Jan Kowalski', 'Mateusz Buła', 'Filip Konopka'];

// osoby.forEach((value, index, arr) => {
// 	console.log(value.split(' '));
// 	// console.log(index)
// 	console.log(arr)
// });

// console.log(osoby.slice(1,2))
// console.log(osoby)

// let arr = osoby.splice(1, 2)

// console.log(arr)
// console.log(osoby)

let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester 1': 'Marek Buła',
	namesList: [
		'Krzysztof',
		'Marek',
		{ user1: ['Krzysztof'], a: [1, 2, 3, 45, 6] },
	],
};

// console.log(obj.namesList[2].user1);

/* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 klucze(książki).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze: Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być to lista w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron*/

let biblioteka = {
	książka1: {
		Tytuł: ['Tytuł1'],
		Autor: ['Autor1'],
		'Data wydania': [333],
		'Ilość stron': [23],
	},
	książka2: {
		Tytuł: ['Tytuł2'],
		Autor: ['Autor2'],
		'Data wydania': [333],
		'Ilość stron': [23],
	},
	książka3: {
		Tytuł: ['Tytuł3'],
		Autor: ['Autor3'],
		'Data wydania': [333],
		'Ilość stron': [23],
	},
};

// console.log(biblioteka.książka1.Tytuł[0]);
// console.log(biblioteka.książka1.Autor[0]);
// console.log(biblioteka.książka1['Data wydania'][0]);
// console.log(biblioteka.książka1['Ilość stron'][0]);

// console.log(Object.keys(biblioteka.książka1))
// console.log(Object.values(biblioteka.książka1))






let mojaFunkcja = (myName = 'Krzysztof') => {
    
    console.log(myName)
}

mojaFunkcja()
mojaFunkcja('Marek')
mojaFunkcja('Kasia')