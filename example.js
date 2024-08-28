// var myName

// myName = "Krzysztof"

let myName = 1;
myName = '';
myName = [];
myName = {};
myName = () => {};

const myName1 = 'Krzysztof';
// myName1 = "Marek"

let newMyName = myName1.replace('Krzysztof', 'Krzysztof prowadzi szkolenie');

let text = 'Koty i psy to fajne zwierzaki';

class Main {
	logExampleText() {
		let myNum = 7;

		let myFun = function () {
			let myNewNum = 101;

			return myNewNum;
		};

		myName = 'Krzysiek';
		console.log('Krzysiek prowadzi szkolenie ' + myName + ' ' + myNum);
	}

	logLengthText() {
		console.log(text.length);
	}

	countWords() {
		console.log(text.split(' ').length);
	}
}

// new Main().countWords()

const osoby = [
	'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	['Krzysztof', 'Kołodziejczyk'],
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
// osoby.push('2')
// osoby.unshift(1)
// osoby.pop()
// osoby.shift()
// delete osoby[0]
// osoby[1] = 'Krzysztof Kołodziejczyk'
// osoby[3][1] = 'K'

// osoby.forEach((value, index, arr) => {

// console.log(value.slice(1, 3))

// console.log(arr)
// })

// console.log(osoby.slice(1,2))

// let arr = osoby.splice(1, 2)

// console.log(arr)
// console.log(osoby)



let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester-1': 'Marek Buła',
	namesList: ['Krzysztof', 'Marek',{user1: 'Krzysztof', a:[1,2,3,45,6]}]
};

// delete obj.Admin1

// obj.namesList[2].a

// obj['Tester-1'] = 'Marek B'


// console.log(Object.keys(obj))

// console.log(Object.values(obj))



// Dodaj zmienną której wartością będzie obiekt zawierający 3 książki
// każdy klucz książki powinien mieć wartość nowego obiektu
// W każdym obiekcie książki powinny znaleźć się 3 klucze: Tytuł, Ilość stron, Autor
// Każdy z tych 3 kluczy: Tytuł, Ilość stron, Autor powinien mieć wartość tablicy w której znajdzie się zawartość
// autor: ['Mickiewicz']

// Wyloguj w konsoli informacje dla jednej wybranej książki bez nawiasów


let library = {
	book1: {
		Tytuł: ['Jakaś książka'],
		'Ilość stron': [230],
		Autor: ['Nieznany'],
	},
	book2: {
		Tytuł: ['Pan z balkonika'],
		'Ilość stron': [345],
		Autor: ['Obcy'],
		Regał: 3
	},
	book3: {
		Tytuł: ['Czarny kot'],
		'Ilość stron': [125],
		Autor: ['E.A.POE'],
		getTitle: function() {
			return this.Tytuł
		},
		Regał: 4,
		'Ilość na stanie': "Ilość = 3",
		ID:[465454646,654654654654654,6545646545]
	},
};


// console.log('Tytuł: ' + library.book1.Tytuł[0] + '\n' + 'Ilość stron: ' +  library.book1['Ilość stron'][0] + '\n' + 'Autor: ' +  library.book1.Autor[0])

console.log(`Tytuł: ${library.book1.Tytuł[0]}
Ilość stron: ${library.book1['Ilość stron'][0]}
Autor: ${library.book1.Autor[0]}`)




let list = [
	['Marek Buła', [53453453, 4353453453], '54664645664645', '6464645656'],
	['Krzysztof Kołodziejczyk', '12345353534', 44535345342, 535535553]
]