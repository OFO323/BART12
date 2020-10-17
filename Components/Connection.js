const path = require('path');

const dbPath = path.resolve(__dirname, './database3.db');

const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true,
})

knex
    .select("*")
    .from("Classes")
    .then(data => console.log("data: ", data))
    .catch(err => console.log(err))

module.exports = knex;