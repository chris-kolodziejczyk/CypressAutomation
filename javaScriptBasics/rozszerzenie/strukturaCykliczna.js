// NOTE: Struktura cykliczna

// let obj = {
//     a: 'a',
//     b: {
//         c: 'c',
//         d: 'd',
//     }
// }

// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c

// const getCircularReplacer = () => {
//     const seen = new WeakSet()
//     return (key, value) => {
//         if (typeof value === "object" && value !== null) {
//             if (seen.has(value)) {
//                 return
//             }
//             seen.add(value)
//         }
//         return value
//     }
// }

// let newObj = JSON.parse(JSON.stringify(obj, getCircularReplacer()))

// console.log(newObj)