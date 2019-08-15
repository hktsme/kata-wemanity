import { Request, Response, NextFunction } from "express";
import contactService from "../services/contact.service";

class ContactController {

    /**
     * @description Retrieve all contact entries.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public async index(req: Request, res: Response, next: NextFunction) {
        try {
            const search: string = req.query.search;
            const contacts = await contactService.index(search);

            res.json({ data: contacts });
        } catch (e) {
            res.json({ error: e }).status(500);
        }
    }

    /**
     * @description Retrieve a specific contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public async get(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = +req.params.id;
            const contact = await contactService.get(id);

            res.json({ data: contact });
        } catch (e) {
            res.json({ error: e }).status(500);
        }
    }

    /**
     * @description Add a new contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public async add(req: Request, res: Response, next: NextFunction) {
        try {
            const contactData = req.body;
            const contact = await contactService.add(contactData);

            res.json({ data: contact });
        } catch (e) {
            res.json({ error: e }).status(500);
        }
    }

    /**
     * @description Update an existing contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = +req.params.id;
            const contactData = req.body;
            const contact = await contactService.update(id, contactData);

            res.json({ data: contact });

        } catch (e) {
            res.json({ error: e }).status(500);
        }
    }

    /**
     * @description Delete a specific contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = +req.params.id;
            const deleted: boolean = await contactService.delete(id);

            res.json({ data: deleted });
        } catch (e) {
            res.json({ error: e }).status(500);
        }
    }
}

export default new ContactController();