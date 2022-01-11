function fun() {}

let fun1 = () => {};

class Main {
	constructor() {}

	printText() {
		let list;

		let fun = () => {
			list = [1, 2, 3, 4, 5];
			list[0] = 'Krzysztof Kołodziejczyk';

			return list[0].substr(10);
		};

		console.log(fun());
	}

	getUrl(url = '/językaJavascript') {
		let baseUrl = 'http://mojastrona.pl?text=Uczę';

		return baseUrl + url;
	}
}

new Main().getUrl()

/* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 kluczy (książek).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze:
Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza:
Tytuł, Autor, Data wydania, Ilość stron, powinna być lista w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron




wyloguj w kosoli wartości dla każdej książki
*/

let library = {
	book1: {
		Tytuł: ['Czarny kot'],
		Autor: ['E.A.POE'],
		'Data-wydania': ['?'],
		'Ilość-stron': ['199'],
	},
};

console.log(
	`Book1: \nTytuł: ${library.book1.Tytuł[0]}\nAutor: ${library.book1.Autor}\nData wydania:
	${library.book1['Data-wydania']}\nIlość stron: ${library.book1['Ilość-stron']}`
);




