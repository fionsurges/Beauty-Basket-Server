
exports.up = function(knex, Promise) {
    return knex.schema.createTable('basket', (table) => {
        table.increments()
        table.text('name')
        table.text('brand')
        table.text('type')
        table.text('expiration_date')
        table.text('imageURL')
        table.timestamp('date_added').notNullable().defaultTo(knex.raw('now()'))
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('basket')
};
