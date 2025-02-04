module.exports = {

    async up(knex) {

        await knex.schema.alterTable('user', (table) => {
            table.string('password')
            table.string('mail')
            table.string('username')
        });
    },

    async down(knex) {

        await knex.schema.dropTableIfExists('user');
    }
};
