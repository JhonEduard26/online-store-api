const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 50;

    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.faker.datatype.uuid(),
        name: faker.faker.name.findName(),
        email: faker.faker.internet.email(),
        password: faker.faker.datatype.string(10),
      });
    }
  }

  async create({ name, email, password }) {
    const newUser = {
      id: faker.faker.datatype.uuid(),
      name,
      email,
      password,
    };

    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (!user) throw boom.notFound('user not found');
    return user;
  }

  async update(id, changes) {
    const idx = this.users.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('user not found');

    const user = this.users[idx];
    this.users[idx] = {
      ...user,
      ...changes,
    };
    return this.users[idx];
  }

  async delete(id) {
    const idx = this.users.findIndex((item) => item.id === id);
    if (idx === -1) throw boom.notFound('user not found');

    this.users.splice(idx, 1);
    return { id };
  }
}

module.exports = UsersService;
