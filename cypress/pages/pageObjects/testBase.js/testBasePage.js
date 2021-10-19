import BasePage from '../basePage';
import testBaseSelectors from './testBaseSelectors';

export class TestBasePage extends BasePage {
	constructor() {
		super(); // wymagane przy dziedziczeniu
	}
}

export const testBasePage = new TestBasePage();
