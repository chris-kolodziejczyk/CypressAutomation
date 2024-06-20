let myName;

const myNewName = 'Krzysiek';

myName = 2;
myName = () => {};
myName = [];
myName = 'Moja żona ma na imię Kasia';
myName = {};

class Main {
	logText() {
		myName = "'Trener' Krzysiek";
		console.log(myName);
	}

	logNewText() {
		myName = 'Tester Krzysiek'.console.log(myName);

		let myNewFun = () => {
			let mySecondName = 'Krzysiek';
			myName = 'Michał' + mySecondName;

			return myName;
		};
	}

	getTextFromVariable() {
		let text = 'Koty i psy to fajne zwierzaki';

		console.log(text.substring(0, 4));

		console.log(
			text
				.replace('Koty i psy to fajne zwierzaki', 'Posiadam - koty i psy')
				.split('-')
		);
	}
}

// new Main().getTextFromVariable();

// Koty i psy to fajne zwierzaki

// Logujemy w konsoli tylko słowo Koty

// Dodajemy do tekstu jakiś znak specjalny i logujemy w konsoli podzielony tekst po tym znaku

const osoby = [
	'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	[
		1,
		2,
		[
			[1, 6, 'hgfierhgo', ['Krzysztof', 'Szukamy']],
			[
				'lista',
				2,
				[
					3,
					['Mamy szkolenie'],
					['Ilość dni szkoleniowych', 2, 'Nazwa', 'Cypress dla testrów'],
				],
				3,
			],
			'Tutaj',
		],
	],
];

// console.log(osoby[3][2][1][2][2][3]);

let userDataList = [
	['Jan Kowalski', 'Mateusz Buła', 'Filip Konopka'],
	[432432423432, 342432423, 32432423],
	[3423423423423, 324324324234324, 3243242343242],
	[3424234324234, 324324324, ''],
];

// forEach(callback)
// userDataList.forEach((value, index, arr) => {

// 	console.log(index)
// })

let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester 1': 'Marek Buła',
	namesList: [
		'Krzysztof',
		'Marek',
		{ user1: 'Krzysztof', a: [1, 2, 3, 45, 6] },
	],
	ibansObj: {
		iban1: 34243242423423,
		iban2: 7876854323456,
		iban3: 6456464765756756,
	},
};

// obj.Admin1
// obj['Tester 1'] = 'Krzysztof Kołodziejczyk'

// delete obj.namesList

// Dodaj obiekt JS o nazwie library
// obiekt powinien posiadać 3 klucze: książki
// Każdy klucz książki powinien mieć wartość nowego obiektu
// Wewnątrz obiektu książki powinny znaleźć się kolejne klucze: Tytuł, Ilość stron oraz Autor, a każdy z kluczy powinien mieć wartość listy która zawiera docelowy wpis
// Wyloguj w konsoli informacje dla jedne z książek

let library = {
	book1: {
		tytuł: ['Czarny kot'],
		'ilość stron': ['98'],
		autor: ['Edgar Allan Poe'],
	},
	book2: {
		tytuł: ['Zagłada domu Usherów'],
		'ilość stron': [593],
		autor: ['Edgar Allan Poe'],
	},
	book3: { tytuł: ['Hobbit'], 'ilość stron': [1564], autor: ['Tolkien'] },
};

console.log(
	'Tytuł książki: ' +
		library.book1.tytuł +
		'\n' +
		library.book1.autor +
		'\n' +
		library.book1['ilość stron']
);

// console.log(`Tytuł książki to: ${library.book1.tytuł}
// Autorem książki jest: ${library.book1.autor}
// Ilość stron: ${library.book1['ilość stron']}`);


for (let element in library) {
	console.log(typeof element);
}







const expr = 'Oranges';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
	break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
	
}