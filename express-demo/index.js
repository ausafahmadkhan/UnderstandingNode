const debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const courses = require("./route/courses");

app.use(helmet());
app.use(logger);
app.use("/api/courses", courses);

// console.log(`${process.env.NODE_ENV}`);
// console.log(`${app.get('env')}`);

debug(`Application Name : ${config.get("name")}`);
debug(`Server : ${config.get("mail.host")}`);
debug(`Password : ${config.get("mail.password")}`);

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Listening to port ${port}`));