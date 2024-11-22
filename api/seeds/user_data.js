/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'joe', password: '1234!@#$'},
    {username: 'josh', password: '4321$#@!'},
    {username: 'brandon_addy', password: '1223$%^&'}
  ]);
};
