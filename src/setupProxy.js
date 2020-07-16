module.exports = app => [
    '../mocks/phones/phones.js'
].forEach(mockHandlers => require(mockHandlers)(app));