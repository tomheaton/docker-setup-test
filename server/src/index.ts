import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT

const app: Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("TS App is Running")
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})