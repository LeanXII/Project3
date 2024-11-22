/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_table').del()
  await knex('users_table').insert([
    {username: 'joe', password: '1234!@#$'},
    {username: 'josh', password: '4321$#@!'},
    {username: 'brandon_addy', password: '1223$%^&'}
  ]);
};
