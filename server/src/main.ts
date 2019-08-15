import express from "express";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { ApplicationConfig } from "./config/app.configuration";
import { Routes } from "./config/routes";

const port: number = ApplicationConfig.Port;
const app: express.Express = express();

// Set up CORS
app.use(cors());

// Parse cookie for auth part
app.use(cookieParser());

// Parse body before auth part
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize routes
Routes.Init(app);

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