
// Number('11') - NOTE: Zamiana String na Number

// NOTE: Właściwości:
// Math.E	- Zwraca stałą Eulera, która wynosi ok. 2.71 	2.718281828459045
// Math.LN2	- Zwraca logarytm dwóch, tj. ok. 0.69 	0.6931471805599453
// Math.LN10	- Zwraca logarytm z dziesięciu, tj. ok. 2.30 	2.302585092994046
// Math.LOG2E	- Zwraca logarytm o podstawie 2 z liczby E, czyli ok. 1.44 	1.4426950408889634
// Math.LOG10E	- Zwraca logarytm o podstawie 10 z E, czyli ok. 0.43 	0.4342944819032518
// Math.PI	- Zwraca wartość liczby Pi, czyli ok. 3.14 	3.141592653589793
// Math.SQRT1_2	- Zwraca pierwiastek kwadratowy z 0.5, czyli ok. 0.70 	0.7071067811865476
// Math.SQRT2	- Zwraca pierwiastek kwadratowy z 2, czyli ok. 1.41 	1.4142135623730951

// NOTE: Metody
// Math.abs(liczba)	- Zwraca wartość absolutną liczby
// Math.acos(liczba)	- Zwraca arcus cosinus z liczby (podanej w radianach)
// Math.asin(liczba)	- Zwraca arcus sinus z liczby (podanej w radianach)
// Math.atan(liczba)	- Zwraca arcus tangens z liczby (podanej w radianach)
// Math.ceil(liczba)	- Zwraca najmniejszą liczbę całkowitą, większą lub równą podanej liczbie
// Math.cos(liczba)	- Zwraca cosinus liczby (podanej w radianach)
// Math.exp(liczba)	- Zwraca wartość E podniesionej do potęgi wyrażonej podanym argumentem
// Math.floor(liczba)	- Zwraca największą liczbę całkowitą mniejszą lub równą podanej liczbie
// Math.log(liczba)	- Zwraca logarytm naturalny liczby
// Math.max(liczba1, liczba2)	- Zwraca większą z dwóch liczb
// Math.min(liczba1, liczba2)	- Zwraca mniejszą z dwóch liczb
// Math.pow(liczba1, liczba2)	- Zwraca wartość liczby1 podniesionej do potęgi liczby2
// Math.random()	- Zwraca wartość pseudolosową z przedziału 0 - 1
// Math.round(liczba)	- Zwraca zaokrąglenie danej liczby do najbliższej liczby całkowitej
// Math.sin(liczba)	- Zwraca sinus liczby (podanej w radianach)
// Math.sqrt(liczba)	- Zwraca pierwiastek kwadratowy liczby
// Math.tan(liczba)	- Zwraca tangens liczby (podanej w radianach)


// NOTE: Przykłady


// liczba pseudolosowa z przedziału 0 – 1
console.log(Math.random())

// liczba pseudolosowa z przedziału 1 - 10
console.log(Math.floor(Math.random() * 10) + 1)

// Math.pow(x, y) – zwraca liczbę x podniesioną do potęgi y
console.log(Math.pow(2, 3))

// Math.ceil(x), Math.floor(x), Math.round(x) – zaokrąglenie liczby x – kolejno: zawsze w górę, zawsze w dół, zależnie od ostatniej cyfry (0-4 w dół, 5-9 w górę)
let x = 4.8;

console.log(Math.ceil(x)) //wynikiem będzie 5
console.log(Math.floor(x)) //wynikiem będzie 4
console.log(Math.round(x)) //wynikiem będzie 5 