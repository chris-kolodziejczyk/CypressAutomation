



// Pobieranie losowej liczby
// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min)
// 	max = Math.floor(max)
// 	return Math.floor(Math.random() * (max - min + 1)) + min
// }

// Wykonaj jakieś działanie z 1-sekundowym opóźnieniem 
// 1 sekunda = 1000 milisekund

// setTimeout(function () {
// 	console.log('1 sekunda')
// }, 1000)

// Wykonuj jakieś działanie non stop, co pół sekundy
// let interval = setInterval(function () {
// 	console.log(getRandomIntInclusive(1, 100))
// }, 500)

// setTimeout(function () {
// 	clearInterval(interval)
// }, 10000)

// console.log(getRandomIntInclusive(9, 70))


// NOTE: Pobranie aktualnego miesiąca
// let generateCurrentMonthName = () => {
// 	const month = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
// 	let date = new Date()
// 	let currentMonth = month[date.getMonth()]
// 	return currentMonth.toString()
// }


// NOTE: Zegar

// let timeNow = ''
// let timeText = '12 : 00 : 39'

// let clock = function time() {

// 	timeNow = new Date()

// 	timeText = timeNow.getHours() +
// 		' : ' +
// 		timeNow.getMinutes() +
// 		' : ' +
// 		timeNow.getSeconds()

// 	return timeText

// }

// console.log(clock())


// NOTE: Przykłądowy generator
// class Generator {

// 	constructor() {
// 		this.x = 0
// 		this.silesiaCodes = []
// 		this.valueLetter = []
// 		this.letterId = []
// 	}

// 	returnRandomNum(fromNum, toNum) {

// 		return this.x = Math.floor((Math.random() * (toNum - fromNum + 1)) + fromNum).toString()
// 	}

// 	randomString(len, type) {
// 		type = type && type.toLowerCase()
// 		let str = '',
// 			i = 0,
// 			min = type == 'letters' ? 10 : 0,
// 			max = type == 'number' ? 10 : 62
// 		for (; i++ < len;) {
// 			let r = Math.random() * (max - min) + min << 0
// 			str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48)
// 		}
// 		return str
// 	}

// 	generateCurrentMonthName() {
// 		const month = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
// 		let date = new Date()
// 		let currentMonth = month[date.getMonth()]
// 		return currentMonth.toString()
// 	}
// }