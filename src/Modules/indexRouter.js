const { clientRouter } = require("./Clients/clientRouter");
const { projectRouter } = require("./Projects/projectRouter");
const indexRouter = require("express").Router();

indexRouter.use("/clients", clientRouter);
indexRouter.use("/projects", projectRouter);

module.exports = { indexRouter };
