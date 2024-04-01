import { config } from "dotenv";
config()

import express, { Application } from "express"
import cookieParser from "cookie-parser"
import router from "./routes";
import { errorHandler } from "./middlewares/error.handling.middleware";

const app: Application = express();

// middlewares are one of the main feature of express
// primarily there is five types of middlewares named,
// application-level, router-level, error-handling, built-in and third-party;

// we can use application level middlewares by using app.use()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// routing is also a main feature of expressjs,
// express js provides simple and flexible routing system to handle different http requests;
// check routes folder, it will be available in there.
// there we will also uses some router middlewares;
app.use('/', router)

// error-handling middleware;
app.use(errorHandler)

const PORT: number = Number(process.env.PORT) || 3001
app.listen(PORT, () => {
    console.log(`server is listening at the port ${PORT}`);
})