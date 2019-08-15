import { Request, Response, NextFunction } from "express";

export type HttpVerbs = "GET" | "POST" | "PUT" | "DELETE";

export interface ExpressCallback {
    url: string;
    method: HttpVerbs;
    cb: (req: Request, res: Response, next: NextFunction) => void;
}

export interface RouteConfiguration {
    name: string;
    routes: ExpressCallback[];
}
