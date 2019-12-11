
exports.up = function (knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments();
        tbl.text('make', 128)
            .notNullable()
        tbl.text('model', 128)
            .notNullable()
        tbl.integer('year', 4)
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealer');
};
