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

  async create({ name, orderDate, orderTotal }) {
    const newOrder = {
      id: faker.faker.datatype.uuid(),
      name,
      orderDate,
      orderTotal,
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  async find() {
    return this.orders;
  }

  async findOne(id) {
    return this.orders.find((item) => item.id === id);
  }

  async update(id, changes) {
    const idx = this.orders.findIndex((item) => item.id === id);
    if (idx === -1) throw new Error('Order not found');

    const order = this.orders[idx];
    this.orders[idx] = {
      ...order,
      ...changes,
    };
    return this.orders[idx];
  }

  async delete(id) {
    const idx = this.orders.findIndex((item) => item.id === id);
    if (idx === -1) throw new Error('Order not found');

    this.orders.splice(idx, 1);
    return { id };
  }
}

module.exports = OrdersService;
