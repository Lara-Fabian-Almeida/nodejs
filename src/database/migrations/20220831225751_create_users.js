/**
 * Formas de se comunicar com o banco de dados:
 * Driver - Escreve queries SQL em forma de string e manda o banco executar.
 * Ex.: select * from nome_da_tabela
 * 
 * Query Builder - Escreve as queries programaticamente, usando funções, e a biblioteca se encarrega de gerar a query nativa.
 * Ex.: table('nome_da_tabela).select('*').where(condicao)
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.integer('idade');
        table.string('empresa');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
