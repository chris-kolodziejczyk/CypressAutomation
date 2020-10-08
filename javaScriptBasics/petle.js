



// NOTE: WHILE

// while (condition) {
//     statement;
//     statement;
//     etc.
// }

// let hungry = true

// while (hungry) {
//     console.log("eat")
// }


// NOTE: DO WHILE

// do {
//     statement;
//     statement;
//     etc.
// } while (condition);


// NOTE: FOR

// for (initial; condition; step) {
//     statement;
//     statement;
//     etc.
// }

// let stepIndex
// let stepList = ['step', 'step1', 'step2']

// for (stepIndex = 0; stepIndex < 5; stepIndex++) {
//     // Uruchamia się 5 razy, z wartościami od 0 do 4.
//     console.log('Idę na zachód jeden krok')
// }


// NOTE: For-In

// for (let key in obj) {
//     console.log(key);
// }


// NOTE: for-of

// let arr = ["foo", "bar", "baz"];

// for (let elem of arr) {
//     console.log(elem);
// }

// let str = "Hello";

// for (let char of str) {
//     console.log(char);
// }

//'H' 'e' 'l' 'l' 'o'

// foo bar baz


// NOTE: FOR IN / OF różnice

// let car = { marka: "Fiat", cena: 27000}

// for (let i in car) {console.log(i)} // "marka", "cena"

// for (let i of car) {} // error!

// for (let i in car) {console.log(car[i])} // "Fiat", 27000


// let arr = [3, 5, 7]

// for (let i in arr) { console.log(i) } // 0, 1, 2

// for (let i of arr) { console.log(i) } // 3, 5, 7

// for (let i in arr) { console.log(arr[i]) } // 3, 5, 7


// NOTE: Przerywanie / kontynuacja pętli

// let arr = [0, 20, 33, 42, 58, 16]
// for (var i = 0; i <= arr.length; i++) {

//     if (arr[i] === 42)
//   //    continue  //    break    
//     console.log('Iteracja')
// }