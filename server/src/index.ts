import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.SERVER_PORT;

const app: Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "hello world" });
})

app.listen(PORT, () => {
    console.log(`[server] running on http://localhost:${PORT}`)
})