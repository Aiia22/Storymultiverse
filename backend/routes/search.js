const express = require("express");
const router = express.Router();

// ********** Import controller *********/
const searchController = require("../controllers/searchController");

// ********** Search route *********/

// ===> GET request : /api/search/
router.get("/", searchController.getSearchResults);

module.exports = router;
