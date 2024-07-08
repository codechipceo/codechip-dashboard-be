const serviceHandler = require("../../utils/serviceHandler");
const DatabaseService = require("../ModuleService");
const Clients = require("./clientModel");
const model = new DatabaseService(Clients);
const clientService = {
  createClient: serviceHandler(async (clientDTO) => {
    return await model.save(clientDTO);
  }),
  getClientByid: serviceHandler(async (clientId) => {
    return await model.getDocumentById({ _id: clientId });
  }),
  getAllClients: serviceHandler(async (clientDTO) => {
    const totalClients = await model.getAllDocuments();
    const totalCount = await model.totalCounts();
    return { totalClients, totalCount };
  }),
};

module.exports = { clientService };