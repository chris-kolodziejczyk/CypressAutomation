let muNewNameExtra;
const getUsersName = [];

// let myName = "Krzysiek"

// myName = 45
// myName = () => {}
// myName = []

const myName = [1, 2, 45, 'Krzysiek', 555888999];
// const myName = "Krzysiek"
// let myNewName = myName.replace("Krzysiek", "Marek")
myName[3] = 'Marek';
myName[4] = 444777333;

// myName = 45
// myName = () => {}
// myName = []

// var myName;

// myName = 4;
// var myName;
// myName = 67;

class Main {
	// Jedna linia komentarza
	/*
        Komentarz
        na
        wiele
        linii
    */
	logExampleText(text = 'Krzysiek') {
		let myNumber = 7;
		console.log(myName);

		let getUserName = () => {
			let userName = 'Krzysiek';
		};

		console.log(text)
	}
}

// console.log(myName);
new Main().logExampleText();

new Main().logExampleText('Jutro mam kolejny dzień szkolenia');

new Main().logExampleText('Mam 2 koty i psa');






// console.log('Krzysztof'.slice(1, 4));
// console.log('Krzysztof Kołodziejczyk'.substr(1, 4));
// console.log('Krzysztof Kołodziejczyk'.substring(1));

// let a = 'K,r,z,y,s z,t,o,f'.split(',')
// console.log(a[0].toLowerCase())

let text = 'Koty i psy to fajne zwierzaki';

// // console.log(text.slice(7,10))

console.log(text.slice(24,26).toUpperCase())

// let newText = text.slice(24,26)

// let editText = newText.toUpperCase()

// console.log(editText)

// let myNewText = text.replace(text.substring(5), "się biją bo Libra ma pustą miskę, znów drugi kot wyjadł jej jedzenie")

// console.log(myNewText)

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
					['Ilość dni szkoleniowych', 2, 'Nazwa', 'Cypress dla testerów'],
				],
				3,
			],
			'Tutaj',
		],
	],
];

// console.log(osoby)

osoby.push('1,2,3,4,5');
osoby.pop();

osoby.unshift(1, 2, 3, 4, 5);
osoby.shift();

osoby[0] = 'Krzysztof Kołodziejczyk';
delete osoby[2];

// console.log(osoby.indexOf("Filip Konopka"))

// console.log(osoby[osoby.indexOf("Filip Konopka")].replace("Filip Konopka", "Krzysztof"))

// osoby.forEach((value, index, array) => {

// console.log(value)

// console.log(array)
// })

const osoby1 = ['Jan Kowalski', 'Mateusz Buła', 'Filip Konopka'];

// console.log(osoby1.slice(1,2))
// console.log(osoby1)

// let arr = osoby1.splice(1, 2)

// console.log(arr)
// console.log(osoby1)

let myNewNumber = 1;

let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester 1': 'Marek Buła',
	namesList: [
		'Krzysztof',
		'Marek',
		{ user1: 'Krzysztof', a: [1, 2, 3, 45, 6] },
	],
};

obj.Admin1;

obj['Tester 1'];

obj.AdminExtra = 'Marek N';
obj['AdminExtra2'] = 'Radek S';

delete obj.Admin1;
console.log(Object.keys(obj));
console.log(Object.values(obj));

// Dodaj zmienną której wartością będzie obiekt zawierający 3 książki
// każdy klucz książki powinien mieć wartość nowego obiektu
// w każdym obiekcie książki powinny znaleźć się 3 klucze: Tytuł, Ilość stron, Autor
// Każdy z tych 3 kluczy: Tytuł, Ilość stron, Autor powinien mieć wartość tablicy w której znajdzie się zawartość

// Tytuł: ["Pan tadeusz"]
// wyloguj w konsoli informacje dla jednej wybranej książki bez nawiasu

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

// console.log(library.book3['Ilość na stanie'].replace("Ilość = 3", "Ilość = 5"))

// let userName = 'Krzysiek'

//String userName = "Krzysiek"


// let func1 = x => x * x


// func1(2)


function getUserName (userName = "Krzysiek") {

 return userName
}

// console.log(getUserName())
// console.log(getUserName("Marek"))
// console.log(getUserName("Adrian"))


// login(login, pass) {

// ......type(login)
// ......type(pass)
// }


let userType = ''

// if (userType === 'admin') {
// 	instrukcja_1
// } else if (userType === 'tester') {
// 	instrukcja_2
// } else {
// 	instrukcja_3
// }

switch (userType) {
	case '': console.log('Poprawna wiadomość dotarła')
break;
	case 'ADMIN': console.log('Poprawna wiadomość , ta wiadomość jest tylko dla ADMINA')
break;
	default: throw Error('Wiadomość niepoprawna, nie będzie dostarczona')
}
