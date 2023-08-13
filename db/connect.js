const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://adestanym:9wUUreqSIAgpjcJR@task-manager-api.syv7yai.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose.connect(connectionString);
