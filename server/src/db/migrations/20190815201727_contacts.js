exports.up = (knex, Promise) => knex.schema.createTable('contacts', t => {
    t.increments('id');
    t.string('lastname', 255).notNullable();
    t.string('firstname', 255).notNullable();
    t.string('phone', 25).notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTable('contacts');