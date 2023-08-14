const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  complicated: Boolean,
});

module.exports = mongoose.model('Task',TaskSchema)
