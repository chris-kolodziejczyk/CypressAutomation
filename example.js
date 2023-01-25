let myName = 'Krzysiek';

class Main {
	logText() {
		console.log('Przykładowy tekst w JS');
	}
}

// new Main().logText();

const text = 'Jestem na szkoleniu';

// console.log(`Wybrany tekst to:
// ${text.slice(0, 7)}
// ${text.slice(7, 9).toUpperCase()}
// ${text.slice(9).trim()}`);


const osoby = [
	'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	[['lista', 2,[3,['Mamy szkolenie']],['7', [[34]]], 3]],
	[1, 2, ['Krzysztof', ]],
];

// console.log(osoby.slice(1,2))
// console.log(osoby)

let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester 1': 'Marek Buła',
	namesList: ['Krzysztof', 'Marek'],
};

obj.namesList[1];

obj['Tester 1'];

obj['Admin2'] = 'Jan Kowalski'

obj.Admin3 = ['Katarzyna Kołodziejczyk', 'Wiktor B.']

obj.namesList.push('Wiktor')
obj.namesList.push('Katarzyna')

delete obj.Admin1




let library = {
	book1:{
		Tytuł:['Czarny kot'], 
		Autor:['E A Poe'], 
		'Data wydania':[1800], 
		'Ilość stron':[123]
	},
	book2:{},
	book3:{}
}


// console.log(library.book1.Tytuł)

// console.log(Object.values(library.book1))

// console.log(Object.keys(library.book1))