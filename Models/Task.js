const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  name: String,
  done: Boolean
});

module.exports = Task;
