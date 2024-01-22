import express from "express";
import ViteExpress from "vite-express";
import mailControllers from "./backend/controllers/mailControllers";

const app = express();

app.get("/message", (req, res) => res.send("Hello from express!"));

app.post("/contact", mailControllers.sendContactMail);

ViteExpress.listen(app, 3000, () => console.log("Server is listening ..."));
