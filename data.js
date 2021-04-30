const faker = require("faker");
const arr = [
        "Save ₹50",
        "70% bonanza",
        "40% off",
        "22% off",
        "70% off"
      ]
      
faker.seed(123);

const products = [...Array(50)].map((item) => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      image: faker.random.image(),
      price: faker.commerce.price(),
      fastDelivery: faker.datatype.boolean(),
      inStock: faker.datatype.boolean(),
      offer: faker.random.arrayElement(arr)
  }));

module.exports = products;

