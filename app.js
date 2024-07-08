const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const emailRouter = require("./src/Modules/Email/emailRouter");
const leadRouter = require("./src/Modules/Leads/leadsRouter");
const emailCronJobs = require("./src/cron/emailCron");
const { indexRouter } = require("./src/Modules/indexRouter");
const GlobalError = require("./src/Errors/GlobalError");

emailCronJobs.usaEmailCronJob();
emailCronJobs.indianEmailCronJob();
const app = express();

// initialise required modules
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// to manage routes of ADMIN_PANEL and WEBSITE seperately
app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/emails", emailRouter);
app.use("/leads", leadRouter);

app.use("/api", indexRouter)

app.use(GlobalError);

// to manage incorrect routes
app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ msg: `Requested Route ${req.originalUrl} does not exist ` });
});

module.exports = app;
