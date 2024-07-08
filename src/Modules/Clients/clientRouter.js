const { clientCtrl } = require("./clientCtrl");
const { createClient, getAllClients, getClientById } = clientCtrl;

const clientRouter = require("express").Router();

clientRouter.post("/create", createClient);
clientRouter.post("/getAll", getAllClients);
clientRouter.post("/getById", getClientById);

module.exports = { clientRouter };
