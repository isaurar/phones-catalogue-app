const data = require('./fixtures.js');

module.exports = app => app.get('/api/phones/:id', (req, res) => {
    const {id: requestId} = req.params;
    const found = data.phones.find(({id}) => id === requestId);
    return found ? res.json(found) : res.status(404).json({
        error: 'phone.not.found',
        message: `There is no phone with id: ${requestId}`
    });
});