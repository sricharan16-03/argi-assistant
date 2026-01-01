const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: String,
  soil: String,
  climate: String,
  yield: String,
});

module.exports =
  mongoose.models.Crop || mongoose.model("Crop", CropSchema);
