const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.faker.datatype.uuid(),
        name: faker.faker.commerce.department(),
      });
    }
  }

  async create({ name }) {
    const newProduct = {
      id: faker.faker.datatype.uuid(),
      name,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) throw boom.notFound('category not found');
    return category;
  }

  async update(id, changes) {
    const idx = this.categories.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('category not found');

    const category = this.categories[idx];
    this.categories[idx] = {
      ...category,
      ...changes,
    };
    return this.categories[idx];
  }

  async delete(id) {
    const idx = this.categories.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('category not found');

    this.categories.splice(idx, 1);
    return { id };
  }
}

module.exports = CategoriesService;
