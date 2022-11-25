// var myNewName = '';

// let myNewName2 = '';
// myNewName2 = 7;

// const myNameName = 'Krzysztof jest trenerem';

// let myNewNameName = myNameName.replace('trenerem', 'testerem');

// // function logName() {
// // 	console.log('Krzysztof');
// // }

// class Main {
// 	logInfo(myInfo = 'Krzysztof jest trenerem') {
// 		myNewName = 2;
// 		console.log(myInfo);
// 		console.log(myNewName);
// 	}
// }

// // new Main().logInfo();
// // new Main().logInfo('Coś tam');
// // new Main().logInfo('Kuba jest trenerem');

// const osoby = [
// 	'Jan Kowalski',
// 	'Mateusz Buła',
// 	'Filip Konopka',
// 	[1, 2, 3, ['Krzysztof', ['lista', 2, 3]]],
// ];

// // osoby.forEach((value, index, arr) => {
// // 	console.log(value);

// // });

// let obj = {
// 	Admin1: 'Krzysztof Kołodziejczyk',
// 	'Tester 1': 'Marek Buła',
// 	namesList: ['Krzysztof', 'Marek'],
// };

// // console.log(obj);
// // console.log(Object.values(obj));

// /* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 kluczy (książek).
// Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze: Tytuł, Autor, Data wydania, Ilość stron.
// Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być lista w której znajdą się odpowiednie wpisy.
// Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron

// */

// let library = {
// 	book1: {
// 		Tytuł: ['Czarny kot'],
// 		Autor: ['E A Poe'],
// 		'Data wydania': ['1800'],
// 		'Ilość stron': ['120'],
// 	},
// 	book2: {
// 		Tytuł: ['Czarny kot1'],
// 		Autor: ['E A Poe1'],
// 		'Data wydania': ['18001'],
// 		'Ilość stron': ['1201'],
// 	},
// 	book3: {
// 		Tytuł: ['Czarny kot11'],
// 		Autor: ['E A Poe1111'],
// 		'Data wydania': ['180011'],
// 		'Ilość stron': ['1201111'],
// 	},
// };

// console.log(
// 	`${library.book1.Autor[0]} ${library.book1.Tytuł[0]} ${library.book1['Data wydania'][0]} ${library.book1['Ilość stron'][0]}`
// );

class Animal {
	constructor(animalName = 'Animal') {
		this.animalName = animalName;
	}
	speak(message = 'makes a noise.') {
		console.log(this.animalName + message);
	}
}
class Dog extends Animal {
	constructor(dogName) {
		super(dogName);
	}
	barking() {
		this.speak(' barks');
	}
}
let dog = new Dog('Rufus');
dog.barking();
