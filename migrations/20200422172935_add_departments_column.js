
exports.up = function(knex) {
  return knex.schema.alterTable('users', tbl => {
      tbl.string('department')
  })
};

exports.down = function(knex) {
  
};
