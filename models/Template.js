import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  feature: { type: String, required: true },
  name: { type: String, required: true },
  customFields: [
    {
      type: { type: String, required: true },
      text: { type: String },
      links: { type: Array },
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
