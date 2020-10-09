cy.visit(url)
cy.visit(url, options)
cy.visit(options)



cy.get(selector)
cy.get(alias)
cy.get(selector, options)
cy.get(alias, options)


.eq(index)
.eq(indexFromEnd)
.eq(index, options)
.eq(indexFromEnd, options)



.click()
.click(options)
.click(position)
.click(position, options)
.click(x, y)
.click(x, y, options)


.contains(content)
.contains(content, options)
.contains(selector, content)
.contains(selector, content, options)



.type(text)
.type(text, options)



.clear()
.clear(options)



cy.url()
cy.url(options)



.check()
.check(value)
.check(values)
.check(options)
.check(value, options)
.check(values, options)


.uncheck()
.uncheck(value)
.uncheck(values)
.uncheck(options)
.uncheck(value, options)
.uncheck(values, options)


cy.fixture(filePath)
cy.fixture(filePath, encoding)
cy.fixture(filePath, options)
cy.fixture(filePath, encoding, options)



cy.readFile(filePath)
cy.readFile(filePath, encoding)
cy.readFile(filePath, options)
cy.readFile(filePath, encoding, options)



cy.viewport(width, height)
cy.viewport(preset, orientation)
cy.viewport(width, height, options)
cy.viewport(preset, orientation, options)



.children()
.children(selector)
.children(options)
.children(selector, options)



.should(chainers)
.should(chainers, value)
.should(chainers, method, value)
.should(callbackFn)



cy.request(url)
cy.request(url, body)
cy.request(method, url)
cy.request(method, url, body)
cy.request(options)


