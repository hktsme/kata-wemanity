import knex from "knex";

const Knex = knex({
    client: "mysql",
    connection: {
        host : "127.0.0.1",
        user : "katawemanity",
        password: "katawemanity",
        database : "katawemanity"
    }
});

export default Knex;