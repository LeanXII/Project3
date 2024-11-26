/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('searches', function(table) {
      table.increments('id');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('search_text');
      table.timestamps(true, true);
    });
  };
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('searches');
  };
