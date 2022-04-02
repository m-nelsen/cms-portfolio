import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  feature: { type: String },
  customFields: [],
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
  },
  layout: {
    type: String,
  },
});

module.exports =
  mongoose.models.Template || mongoose.model("Template", templateSchema);
