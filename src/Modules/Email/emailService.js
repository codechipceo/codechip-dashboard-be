const { leadsService } = require("../Leads/leadsService");
const { emailUtility } = require("../../utils/emailUtility");
const moment = require("moment-timezone");
const Events = require("events");
const Leads = require("../Leads/leadsModel");
const emailEvent = new Events();

const followupTemplates = [
  "followUpOne",
  "followUpTwo",
  "followUpThree",
  "followUpFour",
];
const newLeadsTemplates = [
  "newLeadsOne",
  "newLeadsTwo",
  "newLeadsThree",
  "newLeadsFour",
  "newLeadsFive",
];

const emailSubjects = [
  {
    subject:
      "Following Up: Transform Your Business with Our Web Development Services",
  },
  {
    subject: "As Discussed: Our Web Development Services and Pricing",
  },
  {
    subject: "Excited to Share Our Web Development Solutions with You",
  },
  {
    subject: "Based on Your Interest: Explore Our Web Development Services",
  },
  {
    subject: "Here’s How We Can Enhance Your Online Presence",
  },
  {
    subject: "Let’s Take Your Website to the Next Level",
  },
  {
    subject: "Customized Web Development Solutions for Your Business",
  },
  {
    subject: "Let’s Discuss How We Can Help with Your Web Development Needs",
  },
  {
    subject: "Ready to Transform Your Website? Here’s Our Proposal",
  },
  {
    subject:
      "Following Up: Affordable and Professional Web Development Services",
  },
  {
    subject: "Here’s How Our Web Development Services Can Benefit You",
  },
  {
    subject: "Based on Our Discussion: Tailored Web Development Services",
  },
  {
    subject: "Continuing Our Conversation: Web Development Services Overview",
  },
  {
    subject: "Following Up: Explore Our Web Development and Pricing Options",
  },
  {
    subject: "As Promised: Details on Our Web Development Services",
  },
];

const emailService = {
  sendBulkEmails: async (data) => {
    try {
      emailEvent.emit("start-emailing", data);
      // emailEvent.emit("test-email", data);
      return "Email process started";
    } catch (error) {
      throw error;
    }
  },
};

emailEvent.on("test-email", async () => {
  await emailUtility.sendEmail(
    "mansabb007@gmil.com",
    "Testing email",
    newLeadsTemplates[0],
    { name: "Mansab" }
  );
});

emailEvent.on("start-emailing", async (data) => {
  let i = 0;
  let templateName = "";
  const emailSentTo = [];
  try {
    // fetch all emails as per location
    // const allLeadsForEmails = (await leadsService.getAllLeadsForEmail(data))
    //   .allLeads;
    const allLeadsForEmails = [...LEADS];
    if (allLeadsForEmails.length < 1) return "No emails left";

    for (let eachLead of allLeadsForEmails) {
      const { clientName, clientEmail, leadStatus, location } = eachLead;

      // select template according to lead  status type
      if (leadStatus === "FOLLOW_UP") {
        if (i > followupTemplates.length - 1) {
          i = 0;
        }
        templateName = followupTemplates[i];
        i++;
      } else if (leadStatus === "NEW_LEAD") {
        if (i > newLeadsTemplates.length - 1) {
          i = 0;
        }
        templateName = newLeadsTemplates[i];
      }

      // send email
      if (leadStatus === "NEW_LEAD") {
        await emailUtility.sendEmail(
          clientEmail,
          emailSubjects[i],
          templateName ? templateName : newLeadsTemplates[0],
          { name: clientName }
        );
      } else {
        await emailUtility.sendEmail(
          clientEmail,
          subjectName,
          templateName ? templateName : followupTemplates[0],
          { name: clientName }
        );
      }
      console.log("email service")
      // get current time of india and usa to  update latest update
      const currentTimeIndia = moment.tz("Asia/Kolkata").format();
      const currentTimeUSA = moment.tz("America/New_York").format();

      // const updateLeadPayload = {
      //   leadId: eachLead._id,
      //   lastEmailSentIndia: currentTimeIndia,
      //   lastEmailSentUSA: currentTimeUSA,
      //   leadStatus: "FOLLOW_UP",
      // };

      // const updatedLead = await leadsService.updateLead(updateLeadPayload);

      // emailSentTo.push(updatedLead);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = { emailService };
