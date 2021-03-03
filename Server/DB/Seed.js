const mongoose = require('mongoose');
const db = require('./index.js');
const Schemas = require('./Schemas.js');

const makeupList = [
  {
    "productID": 1,
    "name": "Amelia's Sakura Serum",
    "image": "https://cdn.shopify.com/s/files/1/0247/0458/1728/products/SakuraSerum_540x.png?v=1599503203",
    "cost": 49.99,
    "description": "A naturally formulated serum derived from Marine collagen with Japanese Sakura flower extract used to provide daily moisture and reduce dark spots. A nourishing serum that improves skin tone and combats hyperpigmentation.",
  },
  {
    "productID": 2,
    "name": "Amelia's Sakura Moisturizer",
    "image": "https://cdn.shopify.com/s/files/1/0247/0458/1728/products/SkuraMoisturizer_540x.png?v=1599503169",
    "cost": 40,
    "description": "A naturally formulated moisturizer derived from the blend of Marine Collagen and Japanese Sakura flower extract. This moisturizer used to seal and lock in the nutrients and moisture for the skin while providing a brightening effect. ",
  },
  {
    "productID": 3,
    "name": "Amelia's Sakura Serum",
    "image": "https://cdn.shopify.com/s/files/1/0247/0458/1728/products/SakuraSerum_540x.png?v=1599503203",
    "cost": 39.99,
    "description": "A naturally formulated serum derived from Marine collagen with Japanese Sakura flower extract used to provide daily moisture and reduce dark spots. A nourishing serum that improves skin tone and combats hyperpigmentation.",
  },
  {
    "productID": 4,
    "name": "Amelia's Sakura Hydrating Cream",
    "image": "https://cdn.shopify.com/s/files/1/0247/0458/1728/products/SakuraCream_540x.png?v=1599503098",
    "cost": 39.00,
    "description": "A naturally formulated facial cream derived from marine collagen with Japanese Sakura flower extract too deeply hydrate the skin.",
  },
  {
    "productID": 5,
    "name": "Amelia's Sakura Hydrating Toner",
    "image": "https://cdn.shopify.com/s/files/1/0247/0458/1728/products/SakuraSerum_540x.png?v=1599503203",
    "cost": 30,
    "description": "A toner made with the combinations of with Fish Collagen , Japanese Sakura extract, and lychee extract to help reduce and minimize the appearance of dark spots, The acid-free, quick-absorbing texture does not have a sticky feel, and leaves skin elastic, beautifully bright, and translucent looking.",
  }
];

const insertMakeup = function() {
  Schemas.Makeup.create(makeupList)
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err))
};

insertMakeup();