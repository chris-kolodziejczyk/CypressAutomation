class Main {
	constructor() {}

	myMethod(myText) {
		console.log(myText);
	}

	logExampleText() {
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

		console.log(
			library.book1.title + library.book1.pageCount + library.book1.published
		);

		console.log(
			`Title: ${library.book1.title}\nPage Count: ${library.book1.pageCount}\nPublished: ${library.book1.published}`
		);
	}
}

new Main().logExampleText();

// Dodaj obiekt library który posiada 3 klucze książki
// każdy klucz książka powinien mieć wartość obiektu zawierającego
// trzy klucze: tytuł, ilość stron, rok wydania
// wyloguj w konsoli wartości dla każdej z książek

// Napisz funkcję lub metodę JavaScript, aby sprawdzić dwie podane liczby
// i zwróć true,
// jeśli jedna z liczb to 50 lub jeśli ich suma to 50

//  Zamień url tak by był dostępny pełnoprawny adres url
let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';

// console.log(url.split(' ').join('-'));

// console.log(text.replace(/\s/g, '-'));





new Main().myMethod(2);
new Main().myMethod(5);
new Main().myMethod(6);
new Main().myMethod('Krzysztof');
new Main().myMethod('Marek');
new Main().myMethod('Uczymy się Cypressa');
