// var myName

// var myName
// var myName
// var myName
// var myName
// var myName
// var myName
// var myName
// myName = 'Krzysiek'

// String myName = "Krzysiek"
let myName = ''
const myExtra = 'Jestem trenerem'

myName = 2
myName = ''
myName = []
myName = {}

// Niepoprawna edycja typu danych zmiennej stałej
// myExtra = 2
// myExtra = []

let editedMyExtraName = myExtra.replace('Jestem trenerem', 'Jestem trenerem na wielu szkoleniach')

// Niepoprawna edycja typu danych zmiennej stałej
// myExtra = 'Krzysiek robi przerwę'


// let myName = ''

class Main {

        logExampleText(){

            let txt = 'Krzysiek "jest trenerem"'
            
            let myFun = () => {

                let myText = 'Dziś mam szkolenie z Cypress.IO'
                return myText
            }

            console.log(txt)
        }
}

// new Main().logExampleText()




// console.log('Krzysztof'.slice(1, 4))
// console.log('Krzysztof'.substr(1, 4))
// console.log('Krzysztof'.substring(1, 4))
// console.log('Krzysztof'.substring(1))


// console.log('K,r,z,y,s z,t,o,f'.split(' '))







let extraTxt = 'Ala ma dwa koty i jednego psa'


// console.log(extraTxt.replace('Ala ma dwa koty i jednego psa', 'Ala ma dwie fretki i jednego psa'))

// console.log(extraTxt.replace('koty', 'psy'))

// let editExtraText = extraTxt.replace('jednego psa', 'jednego,psa')

// console.log(editExtraText.split(',')[1])

// console.log(extraTxt.substring(26, 29))
// console.log(extraTxt.substring(26))

// let positionTxt = extraTxt.slice(16, 17)

// console.log(positionTxt)

// console.log(extraTxt.charAt(16))




const osoby = [
	'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	[1, 2, [[
		1,6,'hgfierhgo',['Krzysztof','Szukamy']
	], ['lista', 2,[3,['Mamy szkolenie'],['Ilość dni szkoleniowych', 2, 'Nazwa', 'Cypress dla testrów']], 3], "Tutaj"]]
]

// Słowo Szukamy
// console.log(osoby[3][2][0][3][1])

// console.log(osoby)


// osoby.forEach((value, index, array) => {

// console.log(value = 1)

// console.log(array)
// })






// let ages = [32, 33, 16, 45, 40]


// function checkAdult(age) {

//     return age >= 18
// }

// console.log(ages.filter(checkAdult))

// console.log(ages)


// let url = 'http://mojastrona.pl?text=Uczę się języka JavaScript';


// console.log(url.split(' ').join(''))

// console.log(url.replaceAll(' ', ''))







let obj = {
	Admin1: 'Krzysztof Kołodziejczyk',
	'Tester 1': 'Marek Buła',
	Admins: {
		Admin11:'Marek',
		'admin12':'Julia'
	},
	namesList: ['Krzysztof', 'Marek',{user1: 'Krzysztof', a:[1,2,3,45,6]}],
	'users': {
		proper: {
			user1: {
				names: ['Krzysztof', 'Marek'],
				nip: 245345356,
				tel: '+48444555666',
	
	
			},
			user2: {
				names:'Łukasz',
				nip: '856594797549064',
				tel: ['+48444555666', 34546546456, 36786867876],
			}
		},
		falseUsers: {
			user1: {
				names: ['Krzysztof', 'Marek'],
				nip: 245345356,
				tel: '+48444555666',
	
	
			},
			user2: {
				names:'Łukasz',
				nip: '856594797549064',
				tel: ['+48444555666', 34546546456, 36786867876],
			}
		}
	}
};

// obj['users'].user2.tel[1]

// obj['users'].proper.user2.names










// obj.Admin1

// obj['Tester 1']
// obj.Admin1 = 'Marek L'

// obj.Admins.Admin11
// obj.Admins['admin12']

// delete obj['Tester 1']

// console.log(obj.namesList[2].a[3])

// console.log(Object.keys(obj))

// console.log(Object.values(obj.namesList))








// Dodaj zmienną której wartością będzie obiekt zawierający 3 książki
// każdy klucz książki powinien mieć wartość nowego obiektu
// w każdym obiekcie książki powinny znaleźć się 3 klucze: Tytuł, Ilość stron, Autor
// Każdy z tych 3 kluczy: Tytuł, Ilość stron, Autor powinien mieć wartość tablicy w której znajdzie się zawartość
 // autor: ['Mickiewicz']

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

// console.log('Tytuł: ' + library.book1.Tytuł[0] + '\n' + 'Ilość stron: ' +  library.book1['Ilość stron'][0] + '\n' + 'Autor: ' +  library.book1.Autor[0])


// console.log(`Tytuł: ${library.book1.Tytuł[0]}
// Ilość stron: ${library.book1['Ilość stron'][0]}
// Autor: ${library.book1.Autor[0]}`)


















































