import knex from "knex";
import path from "path";

const environment = process.env.NODE_ENV || "development";

const KnexConfigs = {
    test: {
        client: "mysql",
        connection: {
            database: "katawemanity_test",
            user: "katawemanity",
            password: "katawemanity"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.join(__dirname, "..", "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "..", "db", "seeds")
        }
    },
    development: {
        client: "mysql",
        connection: {
            database: "katawemanity",
            user: "katawemanity",
            password: "katawemanity"
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};

const Knex = knex(KnexConfigs[environment]);

export default Knex;