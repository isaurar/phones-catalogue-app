const PhonesAPI = {
    phones: [
        {"id":'1',"title":"phone 1","description":"phone 1 description", "color": "blue", "price":100, 'image': 'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/254441_68ac7acd-9667-41fc-b6b1-1a7e82935558-thumb.jpg'},
        {"id":'2',"title":"phone 2","description":"phone 2 description.", "color": "black", "price":200, 'image': ''},
        {"id":'3',"title":"phone 3","description":"phone 3 description.","color": "white", "price":300, 'image': ''},
        {"id":'4',"title":"phone 4","description":"phone 4 description","color": "black", "price":400, 'image': ''},
        {"id":'5',"title":"phone 5","description":"phone 5 description","color": "black", "price":500, 'image': ''},
        {"id":'6',"title":"phone 6","description":"phone 6 description","color": "black", "price":600, 'image': ''},
        {"id":'7',"title":"phone 7","description":"phone 7 description","color": "black", "price":700, 'image': ''},
        {"id":'8',"title":"phone 8","description":"phone 8 description","color": "black", "price":800, 'image': ''},
        {"id":'9',"title":"phone 9","description":"phone 9 description","color": "black", "price":900, 'image': ''},
        {"id":'10',"title":"phone 10","description":"phone 10 description","color": "black", "price":1000, 'image': ''}
      ],
      getPhonesAndMetadataFiltered: function(page, limit) { 
      const totalRecords = this.phones.length;
      const startIndex = (page - 1) * limit;
      const endIndex = Math.min(startIndex + limit, totalRecords);
      const phonesFiltered = this.phones.filter((phone, index) => index >= startIndex && index < endIndex); 
      return {
        phones: phonesFiltered,
        metadata: {
          page: parseInt(page, 10),
          limit: parseInt(limit, 10),
          total: totalRecords
        }
      }
    },
    getPhone: function(id) { return this.phones.find(phone => phone.id === id); }
}

export default PhonesAPI; 