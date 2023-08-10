const mongoose = require("mongoose");

const tvShowSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  genre: String,
  releaseDate: Date,
  description: String,
  showLength: Number,
  directors: { type: mongoose.Schema.Types.ObjectId, ref: "Director" },
  cast: String,
  productionCompanies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductionCompany",
  },
});

module.exports = mongoose.model("TVShow", tvShowSchema);
