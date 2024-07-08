const asyncHandler = require("../../utils/asyncHandler");
const successResponse = require("../../utils/successResponse");
const { clientService } = require("./clientService");

const clientCtrl = {
  createClient: asyncHandler(async (req, res, next) => {
    const clientDTO = req.body;
    const savedClient = await clientService.createClient(clientDTO);
    return successResponse({ res, data: savedClient, msg: "New Client Added" });
  }),
  getClientById: asyncHandler(async (req, res, next) => {
    const { clientId } = req.body;
    const docById = await clientService.getClientByid(clientId);
    return successResponse({
      res,
      data: docById,
      msg: "Get Client by Id:" + clientId,
    });
  }),
  getAllClients: asyncHandler(async (req, res, next) => {
    const docDTO = req.body;
    const allDoc = await clientService.getAllClients(docDTO);
    return successResponse({
      res,
      data: allDoc.totalClients,
      count: allDoc.totalCount,
      msg: "Get All Clients",
    });
  }),
};

module.exports = { clientCtrl };
