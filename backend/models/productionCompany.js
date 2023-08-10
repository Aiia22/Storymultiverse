const mongoose = require("mongoose");

const productionCompanySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

module.exports = mongoose.model("ProductionCompany", productionCompanySchema);
