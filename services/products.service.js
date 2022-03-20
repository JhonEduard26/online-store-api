const faker = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 50;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.faker.datatype.uuid(),
        name: faker.faker.commerce.productName(),
        price: faker.faker.commerce.price(10, 5000, 0, '$'),
        image: faker.faker.image.food(320),
      });
    }
  }

  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
