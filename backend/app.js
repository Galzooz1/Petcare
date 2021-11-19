const express = require('express')
const path = require("path");
const http = require("http");
const {routesInit, corsAccessControl} = require("./routes/config_routes");
const mongoConnect = require('./db/mongoConnect');
// dotenv.config()

const app = express();

//דואג של מידע שמתקבל או יוצא  יהיה בברירת מחדל ג'ייסון
app.use(express.json());

//מגדירים את תקיית פאבליק כתקייה של צד לקוח שנוכל לשים שם תמונות
app.use(express.static(path.join(__dirname,"public")));

//מטפל בבעית קורס של בקשה מגיעה מהצד לקוח
corsAccessControl(app);
//מגדיר את כל הראוטים של האפליקציה
routesInit(app)

//מייצר סרבר שמשתמש באפ של אקספרס
const server = http.createServer(app);
let port = process.env.POST || "5000";
//מאזינה לפורט של השרת
server.listen(port);