const {faker} = require('@faker-js/faker')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  const fakeData = (entries) => {
    var results = []
    
    for (let i = 0; i < entries; i++) {
      let user = {username: faker.internet.username(), password: faker.internet.password()}
      results.push(user)
    }
    return results;
  }
  await knex('users').insert(fakeData(100));
};
