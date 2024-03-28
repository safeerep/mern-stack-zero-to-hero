import { config } from "dotenv"
config()
import express, { Express } from "express"
import routes from "./routes";
import db from "./config/db";
db()

const app: Express = express();

app.get('/health', (req, res) => {
    res.send({"status": "ok health condition is fine"})
})

app.use('/', routes())

const PORT: number = Number(process.env.PORT) || 8888
app.listen(PORT, () => {
    console.log(`server for mongodb started on port ${PORT} successfully`);
})