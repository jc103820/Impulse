import express from "express";
import cors from "cors";
import { routes } from "./routes/routes";

export const app = express();

// Configure Express
app.set("port", 3000);
app.use(cors({origin: "*"}));
app.use("/", routes);
