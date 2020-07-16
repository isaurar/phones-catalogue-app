const data = require('./fixtures.js');

module.exports = app => app.get('/api/phones', function(request, response) {
    const {query: { page, limit }} = request;

      const phones = data['phones'];
      const totalRecords = phones.length;
      const startIndex = (page - 1) * limit;
      const endIndex = Math.min(startIndex + limit, totalRecords);
      const phonesFiltered = phones.filter((phone, index) => index >= startIndex && index < endIndex);

      setTimeout(() => response.status(200).json({
       phones: phonesFiltered,
       metadata: {
              page: parseInt(page, 10),
              limit: parseInt(limit, 10),
              total: totalRecords
       }
      }), 2000);
 });