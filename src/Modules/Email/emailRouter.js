const { emailCtrl } = require("./emailCtrl");

const emailRouter = require("express").Router();

emailRouter.post("/followUp", emailCtrl.sendFollowUpEmails);

module.exports = emailRouter;
