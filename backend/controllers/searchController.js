const StoryData = require("../models/storyData");

exports.getSearchResults = async (req, res) => {
  try {
    const data = await StoryData.find({});

    console.log("Fetched data:", data);

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Story data not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching data:", error);
    return res.status(500).json({ message: "Error retrieving search results" });
  }
};
