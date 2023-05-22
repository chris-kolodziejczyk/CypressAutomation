export default class BasePage {
	
	constructor() {
		this.url = '';
	}

	visitPage(url = '/') {
		try {
			cy.visit((this.url = url))
				.url()
				.should('include', this.url);
		} catch (ex) {
			console.log('Visit error with url: \n' + url + '\n' + ex);
		}

		return this;
	}

	randomString(len = 10, type = 'letters') {
		type = type && type.toLowerCase();
		let str = '',
			i = 0,
			min = type == 'letters' ? 10 : 0,
			max = type == 'number' ? 10 : 62;
		for (; i++ < len; ) {
			let r = (Math.random() * (max - min) + min) << 0;
			str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
		}
		return str;
	}

	checkUrl(url) {
		cy.url().should('include', url)
	}
}
