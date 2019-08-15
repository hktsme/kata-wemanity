import { RouteConfiguration } from "@lib/type";
import ContactController from "../controllers/contact.controller";

export const ContactRoute: RouteConfiguration = {
    name: "/contacts",
    routes: [
        { url: "/", method: "GET", cb: ContactController.index },
        { url: "/:id", method: "GET", cb: ContactController.get },
        { url: "/", method: "POST", cb: ContactController.add },
        { url: "/:id", method: "PUT", cb: ContactController.update },
        { url: "/:id", method: "DELETE", cb: ContactController.delete }
    ]
};