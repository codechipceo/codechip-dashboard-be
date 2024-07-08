const leadRouter = require("express").Router();
const { leadCtrl } = require("./leadsCtrl");
leadRouter.post("/createBulkLeads", leadCtrl.createBulkLeads);
leadRouter.post("/createSingleLead", leadCtrl.createSingleLead);
leadRouter.post("/getAllLeads", leadCtrl.getAllLeads);
leadRouter.post("/getLeadsForEmail", leadCtrl.getEmailLeads);
leadRouter.post("/updateLead", leadCtrl.updateLead);

module.exports = leadRouter;
