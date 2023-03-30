import { Request, Response, Router } from "express";
import { exercise } from "../models/exercise";

export const routes = Router();

const lifts: exercise[] = [
    {
        name: "benchpress",
        reps: 10,
        sets: 4,
        weight: 30,
    },
    {
        name: "squat",
        reps: 8,
        sets: 3,
        weight: 225,
        note: "No Belt",
    }
]

routes.get("/", async(req: Request, res: Response) => {
    return res.status(200).json(lifts);
});

