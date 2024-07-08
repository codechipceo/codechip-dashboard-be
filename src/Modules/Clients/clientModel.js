const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema(
  {
    clientName: { type: String },
    clientEmail: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    secondaryNumber: { type: String },
    companyLink: { type: String },
    location: {
      type: String,
      enum: ["NATIONAL", "INTERNATIONAL"],
      default: "NATIONAL",
    },
  },
  {
    timestamps: true,
  }
);
const Clients = mongoose.model("Client", ClientSchema);
module.exports = Clients;
