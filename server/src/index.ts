import express, {Express, Request, Response} from "express";
import {connect} from 'mongoose';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import {User} from "./model/user";

dotenv.config();

const PORT = process.env.SERVER_PORT;
const USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

const app: Express = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(
    `mongodb://${USERNAME}:${PASSWORD}@mongodb:27017/`,
    {},
).then(async () => {
    console.log("[server] database connected")

    const user = new User({
        username: "tomheaton",
        name: "Tom Heaton"
    });

    await user.save();
}).catch((error) => {
    console.log(`[server] error ${error}`)
});

/*const db: Connection = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
    console.log("connected to database")
})*/

app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "hello world" });
})

app.get("/test", (req: Request, res: Response) => {
    return res.json({
        message: "test",
        data: [
            {username: "tomheaton", name: "Tom Heaton"},
            {username: "johnsmith", name: "John Smith"}
        ]
    });
})

app.get("/generate", async (req: Request, res: Response) => {
    const user = new User({
        username: "tomheaton",
        name: "Tom Heaton"
    });

    await user.save();

    return res.json({ message: "user saved?" });
})

app.get("/users", async (req: Request, res: Response) => {
    console.log("[server] GET /users called")
    const users = await User.find();

    if (!users) {
        return res.json({
            success: false,
            message: "no users",
        });
    }

    return res.json({
        success: true,
        message: "users found",
        data: users
    });
})

app.listen(PORT, () => {
    console.log(`[server] running on http://localhost:${PORT}`)
})
