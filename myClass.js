let name = 'Krzysztof';

// let myFun = x => console.log(name);

let url = 'http://mojastrona.pl?text=Uczę';

// Dodaj metodę która każdorazowo zmienia wartość dla parametru text w url
// Metoda powinna zwracać url // Metoda nie powinna logować url
// Wyloguj w konsoli url

() => {

}

let list = []



class MyClass {
	constructor() {}

	printETxt(name = 'Krzysztof') {
		if (name === 'Krzysztof') {
			console.log(name.toUpperCase());
		} else {
			console.log(name.toLowerCase());
		}
	}

	returnUrl(urlTxt = 'dom'){
		let url = 'http://mojastrona.pl?text=Uczę'
	 
		return url.replace('Uczę', urlTxt)
	 
	}
	
}

new MyClass

console.log(new MyClass().returnUrl())








let library = {
	'Zew-Cthulhu': {
		title: ['Zew Cthulhu'],
		author: ['H.P. Lovecraft'],
		releaseDate: [1928],
		pages: [64],
	},
	'Serce-oskarżycielem': {
		title: ['Serce oskarżycielem'],
		author: ['Edgar Allan Poe'],
		releaseDate: [1843],
		pages: [11],
	},
	'Zabójstwo-przy-Rue-Morgue': {
		title: ['Zabójstwo przy Rue Morgue'],
		author: ['Edgar Allan Poe'],
		releaseDate: [1841],
		pages: [193],
	},
	'Zagłada-domu-Usherów': {
		title: ['Zagłada domu Usherów'],
		author: ['Edgar Allan Poe'],
		releaseDate: [1839],
		pages: [12],
	},
	'Czarny-kot': {
		title: ['Czarny kot'],
		author: ['Edgar Allan Poe'],
		releaseDate: [1843],
		pages: [28],
	},
};

// console.log(Object.keys(library['Zew-Cthulhu']));
