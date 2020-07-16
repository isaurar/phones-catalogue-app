module.exports = app => [
    '../mocks/phones/phones.js',
    '../mocks/phones/phoneDetails.js'
].forEach(mockHandlers => require(mockHandlers)(app));