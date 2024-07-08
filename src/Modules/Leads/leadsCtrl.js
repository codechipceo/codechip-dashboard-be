const { leadsService } = require("./leadsService");
const leadCtrl = {
  createBulkLeads: async (req, res, next) => {
    try {
      const leadsDTO = req.body;
      const leads = await leadsService.createBulkLead(leadsDTO);
      return res.status(200).json({ data: leads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  createSingleLead: async (req, res, next) => {
    try {
      const leadsDTO = req.body;
      const leads = await leadsService.createSingleLead(leadsDTO);
      return res.status(200).json({ data: leads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAllLeads: async (req, res, next) => {
    try {
      const leadsDTO = req.body;
      const leads = await leadsService.getAllLeads(leadsDTO);
      return res.status(200).json({ data: leads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getEmailLeads: async (req, res, next) => {
    try {
      const leadsDTO = req.body;
      const leads = await leadsService.getAllLeadsForEmail(leadsDTO);
      return res.status(200).json({ data: leads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  updateLead: async (req, res, next) => {
    try {
      const leadsDTO = req.body;
      const leads = await leadsService.updateLead(leadsDTO);
      return res.status(200).json({ data: leads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};


module.exports  ={leadCtrl}