import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const App = express();
const PORT = 3000;

App.listen(3000, () => {
    console.log("Hi There")
});