import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  feature: { type: String, required: true },
  name: { type: String, required: true },
  fields: [
    {
      featureId: { type: String },
      displayName: { type: String },
      description: { type: String },
      type: { type: String },
      value: { type: mongoose.Schema.Types.Mixed },
    },
  ],
});

const templateSchema = new mongoose.Schema({
  components: {
    header: [componentSchema],
    body: [componentSchema],
    footer: [componentSchema],
  },
  description: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  layout: {
    type: String,
  },
});

module.exports =
  mongoose.models.Template || mongoose.model("Template", templateSchema);
