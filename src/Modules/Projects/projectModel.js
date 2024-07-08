const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  projectName: { type: String, required: true },
  projectType: { type: String },
  projectStatus: {
    type: String,
    enum: ["DELIVERED", "IN_PROGRESS"],
    default: "IN_PROGRESS",
  },
  startDate: { type: String },
  expectedEndDate: { type: String },
  liveLink: { type: String },
  projectPrice: { type: Number, required: true },
  milestonePayment: [
    {
      stageName: { type: String, required: true },
      payment: { type: Number, required: true },
    },
  ],
  investMilestone: [
    {
      stageName: { type: String, required: true },
      payment: { type: Number, required: true },
    },
  ],
  providingHosting: { type: Boolean, default: false },
});

const Projects = mongoose.model("Project", ProjectsSchema);
module.exports = Projects;
