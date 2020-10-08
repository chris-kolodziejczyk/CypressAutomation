
/*

    // NOTE: Typy prymitywne:

    undefined: zmienna, która nie ma przypisanej wartości
    undefined

    null: wartość zerowa
    null

    boolean: byt przyjmujący wartość true (prawda) lub false (fałsz)
    true / false

    string: łańcuch znaków
    'Krzysztof' / "Krzysztof"

    symbol: unikalny, niezmienny klucz 
    const symbol1 = Symbol()
    const symbol2 = Symbol(42)
    const symbol3 = Symbol('foo')

    number: liczby całkowite lub dziesiętne
    36

    // NOTE: Typ złożony:

    object: zbiór właściwości
    let obiekt = {}
    let lista = []  

*/

typeof null        // "object"
typeof undefined   // "undefined"
null === undefined // false
null == undefined // true
null === null // true
null == null // true
!null // true
isNaN(1 + null) // false
isNaN(1 + undefined) // true

// console.log(5 * null) // 0
// console.log(null * 5) // 0
// console.log("6" - 1)  // 5
// console.log(6 - "1")  // 5
// console.log("6" + 1)  // 61 String
// console.log(6 + "1")  // 61 String
// console.log("three" * 2) // NaN
// console.log(2 * "three") // NaN
// console.log(3 + null)      // 3
// console.log(3 + undefined) // NaN
// console.log(3 + false)     // 3
// console.log(true + true)   // 2

// console.log(false == 0);            // true
// console.log(false === 0);           // false
// console.log(null == undefined);     // true
// console.log(null === undefined);    // false
// console.log(null == 0);             // false
// console.log(null === 0);            // false
// console.log(false != 0);            // false
// console.log(false !== 0);           // true
// console.log(null != undefined);     // false
// console.log(null !== undefined);    // true
// console.log(null != 0);             // true
// console.log(null !== 0);            // true

// console.log(0 == '0');  // true
// console.log(0 == '');   // true
// console.log('' == '0'); // false!
// console.log(false == undefined) // false
// console.log(false == null)      // false
// console.log(null == undefined)  // true!

// **********************************
// NOTE: Przykłady


// NOTE: Symbol

// console.log(Symbol('foo') === Symbol('foo'))

// **********************************
// console.log(Symbol('foo').toString().split('o'))  

// **********************************
// let age = 30
// let id = Symbol("id")

// let user = {
//     name: "John",
//     'age': 45,
//     [id]: 123
// }

// for (let key in user) console.log(key)

// console.log("Direct: " + Object.values(user))


// NOTE: String

// Metoda: length

// console.log('Krzysztof'.length)

// **********************************
// Metoda: charAt(index)

// console.log('Krzysztof'.charAt(8))

// **********************************
// Metoda: indexOf(str)

// console.log('Krzysztof'.indexOf('f'))

// **********************************
// Metoda: replace(str, newStr)

// console.log('Krzysztof'.replace('Krzysztof', 'Michał'))

// **********************************
// Metoda: slice(begin, end)

// console.log('Krzysztof'.slice(1, 4))

// **********************************
// Metoda: substr(begin, n)

// console.log('Krzysztof'.substr(1, 4))

// **********************************
// Metoda: split(str)

// console.log('K,r,z,y,s,z,t,o,f'.split(','))

// **********************************
// Metoda: toLowerCase()

// console.log('KRZYSZTOF'.toLowerCase())

// **********************************
// Metoda: toUpperCase()

// console.log('krzysztof'.toUpperCase())

// **********************************
// Metoda: inludes()

// console.log('Krzysztof'.includes('f'))