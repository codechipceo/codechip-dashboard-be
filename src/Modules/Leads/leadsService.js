const DatabaseService = require("../ModuleService");
const Leads = require("./leadsModel");
const moment = require("moment-timezone");

const model = new DatabaseService(Leads);

const leadsService = {
  createSingleLead: async (singleLead) => {
    try {
      const lead = await model.save(singleLead);
      return lead;
    } catch (error) {
      throw error;
    }
  },

  createBulkLead: async (leadsArr) => {
    try {
      const savedLeads = await model.saveMany(leadsArr);
      return savedLeads;
    } catch (error) {
      throw error;
    }
  },
  getAllLeads: async (data) => {
    try {
      const allLeads = await model.getAllDocuments();
      const totalCount = await model.totalCounts();
      return { allLeads, totalCount };
    } catch (error) {}
  },

  getAllLeadsForEmail: async (data) => {
    const { location } = data;
    const query = {
      leadStatus: { $in: ["NEW_LEAD", "FOLLOW_UP"] },
    };
    if (location) {
      query.location = location;
    }
    try {
      const allLeads = await model.getAllDocuments(query);
      const totalCount = await model.totalCounts(query);
      return { allLeads, totalCount };
    } catch (error) {
      throw error;
    }
  },

  updateLead: async (updateLead) => {
    const { leadId } = updateLead;
    try {
      const updatedLead = await model.updateDocument(
        { _id: leadId },
        { ...updateLead }
      );
      return updatedLead;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { leadsService };
