const { Schema, model } = require("mongoose");

const leadsSchema = new Schema(
  {
    clientName: {
      type: String,
    },
    clientEmail: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: { type: String },

    secondaryNumber: { type: String },
    companyLink: { type: String },

    location: {
      type: String,
      enum: ["NATIONAL", "INTERNATIONAL"],
      default: "NATIONAL",
    },
    leadStatus: {
      type: String,
      enum: [
        "NEW_LEAD",
        "FOLLOW_UP",
        "IN_PROGRESS",
        "CANCELLED",
        "REJECTED",
        "CONVERTED",
      ],
      default: "NEW_LEAD",
    },
    totalEmailSent: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Leads = new model("Leads", leadsSchema);

module.exports = Leads;
