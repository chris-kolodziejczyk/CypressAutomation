



class Main {

	// metoda - zawsze musi mieć nawias () i {}
	logExampleText(myName = '') {
		
		console.log(myName)
	}
}

// Stwórz nową metodę która zawiera zmienną, której wartością jest imię pisane małymi literami.
// Następnie używając odpowiednich funkcji dla stringów popraw to imię
//tak by zaczynało się z dużej litery.

new Main().logExampleText()
new Main().logExampleText('Marek');
new Main().logExampleText('Krystyna');