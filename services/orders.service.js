const faker = require('@faker-js/faker');

class OrdersService {
  constructor() {
    this.orders = [];
    this.generate();
  }

  generate() {
    const limit = 50;

    for (let i = 0; i < limit; i++) {
      this.orders.push({
        id: faker.faker.datatype.uuid(),
        orderDate: faker.faker.time.recent('abbr'),
        orderTotal: faker.faker.commerce.price(10, 5000, 0, '$'),
      });
    }
  }

  create() {}

  find() {
    return this.orders;
  }

  findOne(id) {
    return this.orders.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = OrdersService;
