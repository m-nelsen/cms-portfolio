import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  type: String,
  children: [],
  featureOptions: [
    {
      name: { type: String },
      displayName: { type: String },
      description: { type: String },
      type: { type: String },
      value: { type: mongoose.Schema.Types.Mixed },
    },
  ],
});

const contentSchema = new mongoose.Schema({
  content: [fieldSchema],
  description: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
  },
  updatedDate: {
    type: Date,
  },
  pageUrl: {
    type: String,
  },
});

module.exports =
  mongoose.models.Content || mongoose.model("Content", contentSchema);
