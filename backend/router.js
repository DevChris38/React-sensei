import express from "express";
import mailControllers from "./controllers/mailControllers";

const app = express();

app.post("/contact", mailControllers.sendContactMail);
