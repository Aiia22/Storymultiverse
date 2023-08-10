//************** Import models  */
const Film = require("../models/film");
const TVShow = require("../models/tvShow");
const Game = require("../models/game");
const Book = require("../models/book");
const Director = require("../models/directors");
const ProductionCompagny = require("../models/productionCompany");
const publishingCompany = require("../models/publishingCompany");
const User = require("../models/user");

exports.getSearchResults = async (req, res) => {
  const searchTerm = req.query.term.toLowerCase();

  try {
    const films = await Film.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const tvShows = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const books = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const games = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const authors = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const users = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const directors = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const productionCompagnies = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    const publishingCompanies = await TVShow.find({
      name: { $regex: searchTerm, $options: "i" },
    });

    return res.status(200).json({
      films,
      tvShows,
      books,
      authers,
      users,
      directors,
      productionCompagnies,
      publishingCompanies,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving search results" });
  }
};
