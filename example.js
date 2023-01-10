let myName;

const myNewName = 'Krzysztof';
let mySecondName = myNewName.replace('z', 'Z');
let mySecondName1 = myNewName.replaceAll('z', 'Z');

class Main {
	// metoda programistyczna zawsze musi mieć nawias okrągły i klamrowy
	logText() {
		// zasięg blokowy
		let myAge = 39;

		let myFun = () => {
			(myAge = 39), 5;

			// zasięg funkcyjny
			let myNewAge = 40;
		};

		const text = 'Ala ma kota';
		const osoby = [
			'Jan Kowalski',
			'Mateusz Buła',
			'Filip Konopka',
			[1, 2, 3, ['Krzysztof', ['lista', 2, 3]]],
		];

		// osoby[0] = '2'

		let editedText = text.slice(10).toUpperCase();

		// console.log(osoby.slice(1, 2));
		// console.log(osoby.splice(1, 2));

		let url = 'http://mojastrona.pl?text';

        let editedtUrl = url.split(' ')
		// console.log(editedtUrl.join('-'));

        let number = '2'

        
        if (number === 34) {
            console.log(number + ' Poprawny')
        } else if (number === '34') {
            console.log(number + ' błędny')
        } 

        console.log(number)
	}
}

new Main().logText();






// let usersObject = {
// 	Users: {
//         user1: {
//             userName: 'Krzysztof Kołodziejczyk',
//             tel: 555666999,
//             PESEL: 11147852365,
//             ID:7778787852
//         }
//     }
// };


// obj.Admin1


// obj['Tester 1']

// obj.namesList[1]


// obj['Tester 2'] = 'Krzysztof Kołodziejczyk'
// obj.admin2 = 'Krzysztof Kołodziejczyk'

// // edycja wartości
// obj.Admin1 = 'Marek Buła'

// // usunięcie klucza i wartości
// delete obj['Tester 1']


/* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 klucze (książki).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze: Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być listą w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron */



let library = {
    book1:{
        Tytuł:['Czarny kot'],
        Autor:['E A POE'],
        'Data wydania':[1980],
        'Ilość stron':[120]
    },
    book2:{
        Tytuł:[],
        Autor:[],
        'Data wydania':[],
        'Ilość stron':[]
    },
    book3:{
        Tytuł:[],
        Autor:[],
        'Data wydania':[],
        'Ilość stron':[]
    }
}

// console.log(library.book1.Tytuł[0] + '\n' + library.book1.Autor[0] + '\n' + library.book1['Data wydania'][0] + '\n' + library.book1['Ilość stron'][0])

// console.log(`${library.book1.Tytuł[0]}
// ${library.book1.Autor[0]}
// ${library.book1['Data wydania'][0]}
// ${library.book1['Ilość stron'][0]}`)

// console.log(isNaN(1 + undefined))






// `Błąd działania kodu w zmiennej number: ${number}`





let mojaFunkcja = myName => console.log(myName)