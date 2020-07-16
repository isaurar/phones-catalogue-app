module.exports = app => {
    // Setup router
    app.get('/api/phones', (req, res) => {
        res.json({example: 'works!'});
    });
};