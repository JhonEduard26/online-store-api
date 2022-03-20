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

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = UsersService;
