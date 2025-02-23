'use strict';


module.exports = {
    async up(knex) {
        await knex.schema.createTable('favorite', (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable()
                .references('id').inTable('user').onDelete('CASCADE');
            table.integer('film_id').unsigned().notNullable()
                .references('id').inTable('film').onDelete('CASCADE');
            table.unique(['user_id', 'film_id']); // Un utilisateur ne peut ajouter un film qu'une seule fois
        });
    },

    async down(knex) {
        return knex.schema.dropTable('favorite');
    }
};
