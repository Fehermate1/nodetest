import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";

const App = express();
const PORT = 3000;

App.listen(3000, () => {
    console.log("Hi There")
});

App.get("/express", (req, res,) => {
    console.log("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
});

App.get("/greeting", (req, res) => {
    console.log("Hello, Fehér Máté")
});

App.get("nodejs ", (req, res) => {
    console.log("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
});
