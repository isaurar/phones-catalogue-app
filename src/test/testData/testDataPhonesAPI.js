const PhonesAPI = {
    phones: [
      {
          "id": "0",
          "title": "Apple iPhone 11",
          "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946",
          "brand": "Apple",
          "technology": "GSM / CDMA / HSPA / EVDO / LTE",
          "announced": "2019, September",
          "dimensions": "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)"
      },
      {
          "id": "1",
          "title": "Apple iPhone 11 Pro",
          "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
          "brand": "Apple",
          "technology": "GSM / CDMA / HSPA / EVDO / LTE",
          "announced": "2019, September",
          "dimensions": "144 x 71.4 x 8.1 mm (5.67 x 2.81 x 0.32 in)"
      },
      {
          "id": "2",
          "title": "Apple iPhone 11 Pro Max",
          "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567808544078",
          "brand": "Apple",
          "technology": "GSM / CDMA / HSPA / EVDO / LTE",
          "announced": "2019, September",
          "dimensions": "158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)"
      },
      {
          "id": "3",
          "title": "Huawei P30",
          "image": "https://images-na.ssl-images-amazon.com/images/I/61Ac--iM0SL._AC_SX466_.jpg",
          "brand": "Huawei",
          "technology": "GSM / HSPA / LTE",
          "announced": "2019, March",
          "dimensions": "149.1 x 71.4 x 7.6 mm (5.87 x 2.81 x 0.30 in)"
      },
      {
          "id": "4",
          "title": "Huawei P30 lite",
          "image": "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/6/9/6901443293087_7.jpg",
          "brand": "Huawei",
          "technology": "GSM / HSPA / LTE",
          "announced": "2019, March",
          "dimensions": "152.9 x 72.7 x 7.4 mm (6.02 x 2.86 x 0.29 in)"
      },
      {
          "id": "5",
          "title": "Huawei P30 Pro",
          "image": "https://img01.huaweifile.com/sg/ms/co/pms/product/6901443293186/428_428_5A5D04AD6D766DF5FB16B72EDC716F5676469B05334043D9mp.png",
          "brand": "Huawei",
          "technology": "GSM / HSPA / LTE",
          "announced": "2019, March",
          "dimensions": "158 x 73.4 x 8.4 mm (6.22 x 2.89 x 0.33 in)"
      },
      {
          "id": "6",
          "title": "Samsung Galaxy S10",
          "image": "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX425_.jpg",
          "brand": "Samsung",
          "technology": "GSM / CDMA / HSPA / EVDO / LTE",
          "announced": "2019, February",
          "dimensions": "149.9 x 70.4 x 7.8 mm (5.90 x 2.77 x 0.31 in)"
      },
      {
          "id": "7",
          "title": "Samsung Galaxy S10+",
          "image": "https://mobiel-assets.imgix.net/product_images/images/27806/original/dvi-front_Samsung-Galaxy-S10Plus_305x450_2b81f89fd470241985c3567e03b8ace793380f51.png?auto=compress%2Cformat&w=500&h=500&s=0a0f44cd1658355281fdf34caed640bd",
          "brand": "Samsung",
          "technology": "GSM / CDMA / HSPA / EVDO / LTE",
          "announced": "2019, February",
          "dimensions": "157.6 x 74.1 x 7.8 mm (6.20 x 2.92 x 0.31 in)"
      },
      {
          "id": "8",
          "title": "Oppo Find 5",
          "image": "https://tweakers.net/i/4-CLMLkoCo9dGpO8PpMLx-Od5wg=/i/1372747544.jpeg",
          "brand": "Oppo",
          "technology": "GSM / HSPA",
          "announced": "2012, December",
          "dimensions": "141.8 x 68.8 x 8.9 mm (5.58 x 2.71 x 0.35 in)"
      },
      {
          "id": "9",
          "title": "Oppo Find",
          "image": "https://assorted.downloads.oppo.com/static/assets/products/find-x2-pro/images/parameter/[pro]/[colorful]/img_h_e_375-0858dbfeaa7a238016652045679f43e7.png",
          "brand": "Oppo",
          "technology": "GSM / HSPA",
          "announced": "2012, June",
          "dimensions": "125 x 66 x 6.7 mm (4.92 x 2.60 x 0.26 in)"
      },
      {
          "id": "10",
          "title": "Oppo Find 7",
          "image": "https://resetearandroid.com/wp-content/uploads/OPPO-Find-7.jpg",
          "brand": "Oppo",
          "technology": "GSM / HSPA / LTE",
          "announced": "2014, March",
          "dimensions": "152.6 x 75 x 9.2 mm (6.01 x 2.95 x 0.36 in)"
      },
      {
          "id": "11",
          "title": "Oppo Find 7a",
          "image": "https://cdn.techjuice.pk/wp-content/uploads/2017/04/Oppo-Find-7a-Price-in-Pakistan.jpg",
          "brand": "Oppo",
          "technology": "GSM / HSPA / LTE",
          "announced": "2014, March",
          "dimensions": "152.6 x 75 x 9.2 mm (6.01 x 2.95 x 0.36 in)"
      },
      {
          "id": "12",
          "title": "Oppo Find 5 Mini",
          "image": "https://cdn.gsmarena.com/vv/newsimg/13/06/oppo-find-5-mini-leak/gsmarena_001.jpg",
          "brand": "Oppo",
          "technology": "GSM / HSPA",
          "announced": "2014, January",
          "dimensions": "137 x 68 x 7.7 mm (5.39 x 2.68 x 0.30 in)"
      }
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