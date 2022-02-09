import myMsgPageSelectors from './myMsgPageSelectors';
import BasePage from '../basePage';

export class MyMsgPage extends BasePage {
	constructor() {
		super();
	}

	clickMsg(msgNum) {
		cy.get(myMsgPageSelectors.msg).then((msgElems) => {
			cy.wrap(msgElems[msgNum]).click();
		});

		return this;
	}

	typeMsg(msgTxt = 'Example info!!!') {
		cy.get(myMsgPageSelectors.msgInput).type(msgTxt);

		return this;
	}

	clickAnswer() {
		cy.get(myMsgPageSelectors.answerBtn).click();

		return this;
	}

	checkMsgList(senderMsgIndex) {
		cy.get(myMsgPageSelectors.msgSender).then((senderElems) => {
			cy.wrap(senderElems[senderMsgIndex]).should(
				'have.text',
				'Example info!!!'
			);
		});

		return this;
	}
}

export const myMsgPage = new MyMsgPage();
