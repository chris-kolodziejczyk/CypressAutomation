class Main {
	constructor() {}

	// prinTextVarZ() {

	// 	var x = 5;
	// 	var y = 10;
	// 	var z  = x + y;
	// 	console.log(z);

	// }

	// prinText() {
	// 	let txt = 'I can eat bananas all day';
	// 	let x = txt.slice(10, 17);
	// 	console.log(x);
	// }

	// prinText() {
	// 	let txt = 'Uczę się stringów w C++';
	// 	// "Uczę się stringów w Javascript"
	// 	console.log(txt.slice(0, 20) + 'Javascript');
	// }

	// prinText() {
	// 	let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';
	// 	console.log(url.replaceAll(" ", ""));

	// 	console.log(url.split(' ').join('_'));
	// }


	prinNmeText(myName = '') {

		// let myName = 'Krzysztof'

		console.log(myName)
	}

}


new Main().prinNmeText()

new Main().prinNmeText('Krzysiek');

new Main().prinNmeText('Marek');

new Main().prinNmeText('Joanna');

new Main().prinNmeText('Olek');











// const osoby = [
// 	'Jan Kowalski',
// 	'Mateusz Buła',
// 	'Filip Konopka',
// 	'Nadzieja Kowalewicz',
// 	'Adam Miałczyński',
// 	['Krzysztof Kołodziejczyk', 'Adam Miałczyński', 'Adam Miałczyński', 87],
// ];

// let obj = {

// 	key1: 'Jan Kowalski',
// 	key2: 'Krzysztof Kołodziejczyk',
// 	'specia*Userl_List': ['Krzysztof Kołodziejczyk']

// }
// osoby[1]

// obj.key2
// obj['specia*Userl_List']

// class MainExtra {
// 	constructor() {}

// 	printText() {
// 		let library = {
// 			book1: {
// 				title: ['Mistrz i Małgorzata'],

// 				author: ['Bułhakow'],

// 				date: { a: 1978, b: 2002 },

// 				pageNumber: [289, 315],
// 			},

// 			book2: {
// 				title: ['Chłopi'],

// 				author: ['Reymond'],

// 				date: [1978],

// 				pageNumber: [489],
// 			},

// 			book3: {
// 				title: ['Nad Niemnem'],

// 				author: ['Orzeszkowa'],

// 				date: [1966],

// 				pageNumber: [989],
// 			},
// 		};

// 		// console.log(libary.book1);

// 		// console.log(libary.book2);

// 		// console.log(libary.book3);

// 		for (let element in library) {
// 			console.log(
// 				library[element].title,
// 				library[element].author,
// 				library[element].release_date,
// 				library[element].pages
// 			);
// 		}
// 	}
// }

// new MainExtra().printText();

/* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 kluczy (książek).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze:
Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być
lista w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron



Tytuł: ['Dziady']


Wyloguj książki z obiektu */

let user = {
	name: ['User1', 'User2'],
	lastName: [],
	tel: ['44-444-444'],
};
