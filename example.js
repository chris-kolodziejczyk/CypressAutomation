// var user
// user = 'Krzysztof'

let userName
const text = 'Krzysztof'



class Main {


logExampleText(newText = 'Krzysztof') {
   
   const text = newText

   console.log(text.toLowerCase())
   // console.log(text.toUpperCase())
   // console.log(text.substring(0, 7) + text.substring(7).toUpperCase())
   // console.log(text.replace('Ala', 'Ola'))

}

}

let a = 'Kasia'
let b = 1
let c = 'Krzysztof'

// if (a === b) {
//    instrukcja
// } else if (a === c) {
//    instrukcja
// } 
// else {
//   throw Error('Komunikat błędu')
// }










// new Main().logExampleText()


const osoby = [
	
   'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	[1, 2, ['Krzysztof', ['lista', 2,[3,['Mamy szkolenie']], 3]]],
];

// console.log(osoby[3][2][1][2][1][0])


// console.log(osoby.slice(1, 2))

// console.log(osoby.splice(1, 2))



// /* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 klucze (książki).
// Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze: Tytuł, Autor, Data wydania, Ilość stron.
// Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być listą w której znajdą się odpowiednie wpisy.
// Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron, bez logowania nawiasów 
// */

// let library = {

//    book1:{
//       Tytuł:['Czarny Kot'],
//       Autor:['E.A.Poe'], 
//       'Data wydania':[1899], 
//       'Ilość stron':[200]
//    },
//    book2:{
//       Tytuł:['Pan Tadeusz'],
//       Autor:['Nieznany'], 
//       'Data wydania':[456], 
//       'Ilość stron':[534534]
//    },
//    book3:{
//       Tytuł:['Cokolwiek'],
//       Autor:['Nieznany'], 
//       'Data wydania':[2000], 
//       'Ilość stron':[1]
//    }

// }

// console.log(library.book1.Tytuł[0] + ' ' + library.book1.Autor[0] + ' ' + library.book1['Data wydania'][0] + ' ' + library.book1['Ilość stron'][0])

// console.log(library.book2.Tytuł[0] + ' ' + library.book2.Autor[0] + ' ' + library.book2['Data wydania'][0] + ' ' + library.book2['Ilość stron'][0])


// console.log(
// `${library.book1.Tytuł[0]}
// ${library.book1.Autor[0]}
// ${library.book1['Data wydania'][0]}
// ${library.book1['Ilość stron'][0]}`
// )


let memberNumber = 2

// console.log("Numer wynosi " + (memberNumber === 2 ? "$2.00" : "$10.00"))






new Main().logExampleText('Krzysztof')
new Main().logExampleText('fiufuirweonfw')
new Main().logExampleText('Michał')