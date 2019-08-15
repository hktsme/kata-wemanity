import http from "http";

import app from "./app";
import { ApplicationConfig } from "./config/app.configuration";

const port: number = ApplicationConfig.Port;
const server: http.Server = new http.Server(app);

server.listen(port);

server.on("error", (e: Error) => {
    console.log("Error server" + e);
});

server.on("listening", () => {
    console.log(
      `🚀    Server is listening on ${ApplicationConfig.URL}`,
    );
});