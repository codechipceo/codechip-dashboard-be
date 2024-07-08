const asyncHandler = require("../../utils/asyncHandler");
const successResponse = require("../../utils/successResponse");
const { projectService } = require("./projectService");

const projectCtrl = {
  createProject: asyncHandler(async (req, res, next) => {
    const projectDTO = req.body;
    const savedProject = await projectService.createProject(projectDTO);
    return successResponse({
      res,
      data: savedProject,
      msg: "New Project Added",
    });
  }),
  getProjectById: asyncHandler(async (req, res, next) => {
    const { projectId } = req.body;
   
    const docById = await projectService.getProjectById(projectId);
    return successResponse({
      res,
      data: docById,
      msg: "Get Project by Id:" + projectId,
    });
  }),
  getAllProjects: asyncHandler(async (req, res, next) => {
    const docDTO = req.body;
    const allDoc = await projectService.getAllProjects(docDTO);
    return successResponse({ res, data: allDoc, msg: "Get All Projects" });
  }),
};

module.exports = { projectCtrl };
