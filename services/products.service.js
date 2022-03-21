const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
        isBlock: faker.faker.datatype.boolean(),
      });
    }
  }

  async create({ name, price, image }) {
    const newProduct = {
      id: faker.faker.datatype.uuid(),
      name,
      price,
      image,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw boom.notFound('product not found');
    if (product.isBlock) throw boom.forbidden('forbidden');
    return product;
  }

  async update(id, changes) {
    const idx = this.products.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('product not found');

    const product = this.products[idx];
    this.products[idx] = {
      ...product,
      ...changes,
    };
    return this.products[idx];
  }

  async delete(id) {
    const idx = this.products.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('product not found');

    this.products.splice(idx, 1);
    return { id };
  }
}

module.exports = ProductsService;
