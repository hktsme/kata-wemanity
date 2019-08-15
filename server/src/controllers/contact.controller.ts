import { Request, Response, NextFunction } from "express";

class ContactController {

    /**
     * @description Retrieve all contact entries.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public index(req: Request, res: Response, next: NextFunction): void {
        res.json("OK");
    }

    /**
     * @description Retrieve a specific contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public get(req: Request, res: Response, next: NextFunction): void {
        res.json("OK");
    }

    /**
     * @description Add a new contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public add(req: Request, res: Response, next: NextFunction): void {
        res.json("OK");
    }

    /**
     * @description Update an existing contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public update(req: Request, res: Response, next: NextFunction): void {
        res.json("OK");
    }

    /**
     * @description Delete a specific contact entry.
     * @author Houtekiet Yves
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @memberof ContactController
     */
    public delete(req: Request, res: Response, next: NextFunction): void {
        res.json("OK");
    }
}

export default new ContactController();