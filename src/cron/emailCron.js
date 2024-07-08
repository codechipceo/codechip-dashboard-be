const cron = require("node-cron");
const { emailService } = require("../Modules/Email/emailService");
const indianTime = "25 16 * * *";
const usaTime = "26 16 * * *";

const emailCronJobs = {
  usaEmailCronJob: () => {
    cron.schedule(
      usaTime,
      () => {
        emailService.sendBulkEmails({ location: "INTERNATIONAL" });
      },
      { timezone: "ASIA/KOLKATA" }
    );
  },
  indianEmailCronJob: () => {
    cron.schedule(
      indianTime,
      () => {
        emailService.sendBulkEmails({ location: "NATIONAL" });
      },
      { timezone: "ASIA/KOLKATA" }
    );
  },
};

module.exports = emailCronJobs;
