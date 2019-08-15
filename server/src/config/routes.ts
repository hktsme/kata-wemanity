import express from "express";

import { ExpressCallback } from "@lib/type";

import { ContactRoute } from "../routes/contact.route";

/** ---------------------------------------------------------
 * !!! ALL ROUTES MUST BE REGISTERED HERE TO BE EFFECTIVE !!!
 --------------------------------------------------------- */
const APP_ROUTES: { name: string, routes: ExpressCallback[] }[] = [
    ContactRoute
];

export class Routes {

    /**
     * @description Keep track of all registered routes.
     * @private
     * @static
     * @type {Set<string>}
     * @memberof Routes
     */
    private static _routes: Set<string> = new Set<string>();

    /**
     * @description Initialize all the routes present in APP_ROUTES for the given express application
     * @author Houtekiet Yves
     * @static
     * @param {express.Express} app Express application
     * @memberof Routes
     */
    public static Init(app: express.Express) {
        APP_ROUTES.forEach((routeConfiguration) => {
            const { name, routes } = routeConfiguration;
            routes.forEach((route) => {
                const routeUid: string = `${name}${route.method}${route.url}`;
                const routeUrl: string = `${name}${route.url}`;

                // If the route has already been registered we throw an error to avoid conflicts.
                if (this._routes.has(routeUid)) {
                    throw new Error(`The route ${routeUrl} for the method ${route.method} has been registered twice.`);
                }

                this._routes.add(routeUid);

                switch (route.method) {
                    case "GET" : app.get(routeUrl, route.cb); break;
                    case "POST" : app.post(routeUrl, route.cb); break;
                    case "PUT" : app.put(routeUrl, route.cb); break;
                    case "DELETE" : app.delete(routeUrl, route.cb); break;
                }
            });
        });
    }

    private constructor() {}
}