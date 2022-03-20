const faker = require('@faker-js/faker');

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

  create({ name, email, password }) {
    const newUser = {
      id: faker.faker.datatype.uuid(),
      name,
      email,
      password,
    };

    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update(id, changes) {
    const idx = this.users.findIndex((item) => item.id === id);
    if (idx === -1) throw new Error('User not found');

    const user = this.users[idx];
    this.users[idx] = {
      ...user,
      ...changes,
    };
    return this.users[idx];
  }

  delete(id) {
    const idx = this.users.findIndex((item) => item.id === id);
    if (idx === -1) throw new Error('User not found');

    this.users.splice(idx, 1);
    return { id };
  }
}

module.exports = UsersService;
