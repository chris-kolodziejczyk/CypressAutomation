class Main {
	printText() {
		// console.log('K,r,z,y,s z,t,o,f'.split(','));

		// console.log('Koty i psy to fajne zwierzaki'.split(' ').length);

		// let a = '23'
		// let b = ' 34'
		// console.log(Number(a) + Number(b))
		let obj2 = {
			User1: {
				name: '',
				lastName: '',
				tel: '',
				NIP: '',
			},
			User2: {
				name: '',
				lastName: '',
				tel: '',
				NIP: '',
			},
		};

		console.log(Object.values(obj2));
	}

	myMethod(obj = {}) {
		console.log(obj.book1.title);
	}
}

let library = {
	book1: {
		title: 'Tytuł1',

		pageCount: 281,

		published: 1961,
	},

	book2: {
		title: 'Tytuł2',

		pageCount: 139,

		published: 2002,
	},
	book3: {
		title: 'Tytuł3',

		pageCount: 471,

		published: 2017,
	},
};

new Main().myMethod({
	book1: {
		title: 'Czarny kot',
	},
});

// Dodaj obiekt library który posiada 3 klucze książki
// każdy klucz książka powinien mieć wartość obiektu zawierającego
// trzy klucze: tytuł, ilość stron, rok wydania
// wyloguj w konsoli wartości dla każdej z książek

let positiveNegative = (x, y) => {
	if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
		return true;
	} else {
		return false;
	}
};

console.log(positiveNegative(2, -1))
