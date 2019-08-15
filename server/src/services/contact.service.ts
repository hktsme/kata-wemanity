import { Contact } from "../models/contact";
import Knex from "../config/sql.config";

const TABLE_NAME: string = "contacts";

export class ContactService {

    private get Table() {
        return Knex(TABLE_NAME);
    }

    public async index(search?: string): Promise<Contact[]> {
        let query = this.Table.select();
        if (search && search.length) {
            query = query.where("lastname", "like", `%${search}%`)
                         .orWhere("firstname", "like", `%${search}%`)
                         .orWhere("phone", "like", `%${search}%`);
        }

        return await query;
    }

    public async get(id: number): Promise<Contact> {
        return await this.Table.select().where({ id }).first();
    }

    public async add(data: Contact): Promise<Contact> {
        if (!this.IsContactValid(data)) {
            throw new Error("Contact information are not valid please ensure sent data is correct");
        }
        const lastInsert = await this.Table.insert(data, "id");
        const newContact = await this.get(lastInsert[0]);

        return newContact;
    }

    public async update(id: number, data: Contact) {
        if (!this.IsContactValid(data)) {
            throw new Error("Contact information are not valid please ensure sent data is correct");
        }
        await this.Table.where({ id }).update(data);

        return this.get(id);
    }

    public async delete(id: number) {
        return !!await this.Table.where({ id }).delete();
    }

    private IsContactValid(contact: Contact): boolean {
        return !!contact.firstname && contact.firstname.length && contact.firstname.length < 256 &&
               !!contact.lastname && contact.lastname.length && contact.lastname.length < 256 &&
               !!contact.phone && contact.phone.length && /^[+][1-9][\d][\s][\d]{2}[\s][\d]{6,}$/.test(contact.phone);
    }
}

export default new ContactService();