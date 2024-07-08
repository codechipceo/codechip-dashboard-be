const { projectCtrl } = require("./projectCtrl");
const projectRouter = require("express").Router();
const { createProject, getAllProjects, getProjectById } = projectCtrl;


projectRouter.post("/create", createProject);
projectRouter.post("/getAll", getAllProjects);
projectRouter.post("/getById", getProjectById);

module.exports = { projectRouter };
