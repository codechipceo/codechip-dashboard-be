const CustomError = require("../../Errors/CustomError");
const serviceHandler = require("../../utils/serviceHandler");
const DatabaseService = require("../ModuleService");
const Projects = require("./projectModel");
const model = new DatabaseService(Projects);

const projectService = {
  createProject: serviceHandler(async (projectDTO) => {
    return await model.save(projectDTO);
  }),
  getProjectById: serviceHandler(async (projectId) => {
     if (!projectId) {
       throw new CustomError(400, "Project ID is not defined");
     }
    const isProject = await model.getDocumentById({ _id: projectId });
    if (!isProject) {
      throw new CustomError(400,"Project doesnt exist");
    }
    let totalPaymentDone = isProject.milestonePayment.reduce(
      (sum, milestone) => sum + milestone.payment,
      0
    );
    const paymentLeft = isProject.projectPrice - totalPaymentDone;
    return {
      ...isProject,
      paymentLeft,
      totalPaymentDone,
    };
  }),
  getAllProjects: serviceHandler(async (projectDTO) => {
    const query = projectDTO;
    const totalProjects = await model.getAllDocuments(query);
    const totalCount = await model.totalCounts(query);
    return { totalProjects, totalCount };
  }),
};

module.exports = { projectService };
