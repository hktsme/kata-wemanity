process.env.NODE_ENV = "test";

import mocha from "mocha";
import { expect } from "chai";
import app from "../app";
import { agent as request } from "supertest";
import knex from "../config/sql.config";

describe("Contact tests", function () {

    beforeEach(() => {
        return knex.migrate.rollback()
            .then(() => knex.migrate.latest())
            .then(() => knex.seed.run())
    });

    afterEach(() => {
        return knex.migrate.rollback();
    });

    it("POST /contacts should return the newly added contact", async function () {
        const contact = {
            lastname: "Doe",
            firstname: "John",
            phone: "+32 02 1234567"
        };

        const res = await request(app).post("/contacts/").send(contact);

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data.lastname).to.equal("Doe");
        expect(res.body.data.firstname).to.equal("John");
        expect(res.body.data.phone).to.equal("+32 02 1234567");
        expect(res.body.data).to.have.property("id");
        expect(res.body.data.id).to.be.greaterThan(0);
    });

    it("GET /contacts should return array of contact", async function () {
        const res = await request(app).get("/contacts/");

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data).to.be.a("array");
        if (res.body.data.length) {
            expect(res.body.data[0]).to.have.property("lastname");
            expect(res.body.data[0]).to.have.property("firstname");
            expect(res.body.data[0]).to.have.property("phone");
        }
        expect(res.body.error).to.be.undefined;
    });

    it("GET /contacts/:id should return a specific contact", async function () {
        const res = await request(app).get("/contacts/1");

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
    });

    it("PUT /contacts/:id should return the freshly updated contact", async function () {
        const contact = {
            lastname: "Doe",
            firstname: "John",
            phone: "+32 02 1234567"
        };

        const res = await request(app).put("/contacts/1").send(contact);

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data.lastname).to.equal("Doe");
        expect(res.body.data.firstname).to.equal("John");
        expect(res.body.data.phone).to.equal("+32 02 1234567");
        expect(res.body.data).to.have.property("id");
        expect(res.body.data.id).to.equal(1);
    });

    it("DELETE /contacts/:id should return true if contact is deleted", async function () {
        const res = await request(app).delete("/contacts/1");

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).to.be.equal(true);
        expect(res.body.error).to.be.undefined;
    });
});