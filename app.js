import express from "express";
import connectMongoDb from "./dbs/connectDb.js";
import web from "./routes/web.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/logindb";

//settingup defaultengine
app.set("view engine", "ejs");

//serving static files
app.use("/", express.static(join(process.cwd(), "public")));
// app.use('/registration', express.static(join(process.cwd(), 'public')))

// middleware to get data from user forms
app.use(express.urlencoded({ extended: false }));

//getting jason data from user
app.use(express.json());

//using routes
app.use("/", web);

// setting up server
app.listen(port, () => {
  console.log(` server started on http://localhost:${port}`);
});

//mongodb connection function call with parameter
connectMongoDb(MONGODB_URI);
