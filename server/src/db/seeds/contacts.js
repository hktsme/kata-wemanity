
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        { id: 1, lastname: 'Doe', firstname: 'John', phone: '+32 04 1234567'},
        { id: 2, lastname: 'Doe', firstname: 'Melissa', phone: '+56 04 12345617'},
        { id: 3, lastname: 'Dupont', firstname: 'Albert', phone: '+34 06 12345671'},
        { id: 4, lastname: 'Dupont', firstname: 'Sarah', phone: '+39 02 123224567'}
      ]);
    });
};
