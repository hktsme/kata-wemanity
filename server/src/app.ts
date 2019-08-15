import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { Routes } from "./config/routes";

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

export default app;