let fs = require('fs')


class DocumentClass {

	constructor() {

		this.encoding = ['utf8', 'utf16', 'ASCII', 'BINARY']
	}

	createPromise() {
		const deferred = {
			promise: null,
			resolve: null,
			reject: null,
		}

		deferred.promise = new Promise((resolve, reject) => {
			deferred.resolve = resolve
			deferred.reject = reject
		})

		return deferred
	}

	readDir(source) {
		return new Promise(function (resolve) {
			fs.readdir(source, function (err, list) {
				if (err) {
					console.error(err)

				}

				resolve(list)
			})
		})
	}

	readFile(filePath, encoding = this.encoding[0]) {
		try {
			return fs.readFileSync(filePath, encoding).toString().split(/[[\n,\r]+/)
		} catch (err) {
			console.error(`Couldn't read file with path: ${filePath} : ${err} `)
		}
	}

	findFolder(source) {
		let readDir = this.createPromise().promise = this.readDir(source)
		return readDir
			.then((list) => {
				console.log(list)
				return list
			})
			.catch((err) => {
				console.error(`No results\n${err}`)
			})
	}

	getIndexFile(filePath, text, encoding = this.encoding[0]) {
		let indexList = []
		let file = fs.readFileSync(filePath, encoding).toString().split(/[[\n\r]+/)
		for (let i in file) {
			if (file[i].includes(text)) {
				indexList.push(Number(i) + 1)
			}
		}
		if (indexList.length === 0) {
			console.log('No results')
		}
		console.log(`Index: ${indexList}`)
		return indexList
	}

	writeFile(document, contents) {

		fs.writeFile(document, contents, (err) => {
			if (err) {
				console.error(`Couldn't save ${document} file with contents:${contents} : ${err} `)
			}
		})
	}

	prependFileSync(dirPath, fileName, encoding = this.encoding[0], contents) {

		let filePath = path.join(dirPath, fileName)
		let txt = this.readFile(filePath, encoding)

		txt.unshift(contents.trimStart())
		this.writeFile(filePath, txt.join('\n'))
	}

	appendFileSync(document, contents) {

		fs.appendFileSync(document, `\n${contents.trimEnd()}`, (err) => {
			if (err) {

				console.error(`Couldn't append ${document} file with contents:${contents} : ${err} `)
			}
		})
	}

	saveDocument(typeOfSave, nameOfDocument, typeOfDocument, contents, dirPath, encoding = this.encoding[0]) {

		if (typeOfSave === 'save') {

			this.writeFile(`${nameOfDocument}.${typeOfDocument}`, contents)

		} else if (typeOfSave === 'prepend') {

			this.prependFileSync(dirPath, `${nameOfDocument}.${typeOfDocument}`, encoding, contents)

		} else if (typeOfSave === 'append') {

			this.appendFileSync(`${nameOfDocument}.${typeOfDocument}`, contents)

		}
	}
}

let doc = new DocumentClass()

console.log(doc.readFile('../lib/przykładowyPlik.txt').length)

