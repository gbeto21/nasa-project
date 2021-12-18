const { Schema } = require("mongoose");
const planetSchema = new Schema({
  keplerName: {
    type: String,
    required: true,
  },
});
