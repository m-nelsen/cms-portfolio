import mongoose from "mongoose";

const contentElementSchema = new mongoose.Schema({
  type: { type: String },
  content: { type: String },
});

const contentSchema = new mongoose.Schema({
  contentElements: [contentElementSchema],
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [160, "Title cannot be more than 160 characters"],
  },
});

module.exports =
  mongoose.models.Content || mongoose.model("Content", contentSchema);
