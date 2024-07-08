const { emailUtility } = require("../../utils/emailUtility");

const { emailService } = require("./emailService");
const emailCtrl = {
  sendFollowUpEmails: async (req, res, next) => {
    try {
      const emailDTO = req.body;
      const emailResponse = await emailService.sendBulkEmails(emailDTO);

      return res.status(200).json({ response: emailResponse });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { emailCtrl };
