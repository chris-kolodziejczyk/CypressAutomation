let obj = {
	login: 'login123',
	pass: 'pas234',
};

obj.pass = 'pas678';
obj['login'] = 'login678';

/* Stwórz obiekt o nazwie 'library', który będzie zawierał 5 kluczy (książek).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze:
Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron,
powinna być lista w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron

*/

let library = {
	book1: {
		title: ['Raven'],
		author: ['Edgar Allan Poe'],
		releaseDate: ['2016-09-14'],
		bookLength: [50],
	},
	book2: {
		title: ['Black Cat'],
		author: ['Edgar Allan Poe'],
		releaseDate: [2013],
		bookLength: [33],
	},
	book3: {
		title: ['The Murders in the Rue Morgue'],
		author: ['Edgar Allan Poe'],
		releaseDate: [2013],
		bookLength: [75],
	},
	book4: {
		title: ['The Fall of the House of Usher'],
		author: ['Edgar Allan Poe'],
		releaseDate: [''],
		bookLength: [37],
	},
	book5: {
		title: ['The Gold Bug'],
		author: ['Edgar Allan Poe'],
		releaseDate: ['1995-01-01'],
		bookLength: [62],
	},
};

console.log(
	library.book1.title[0] +
		',' +
		library.book1.author[0] +
		',' +
		library.book1.releaseDate[0] +
		',' +
		library.book1.bookLength[0]
);

class Main {
	constructor() {}

	printText() {
		let myName = '22222222222';

		let getMyNewName = () => {
			let myNewName = 'Marek';

			return myNewName;
		};

		console.log(getMyNewName());
		console.log(myText);
	}
}

// new Main().printText();
