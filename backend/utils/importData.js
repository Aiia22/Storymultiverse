const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const url =
  "mongodb+srv://TatianaLeclerc:irJ0wKZw30IF8r9P@storymultiverse.zviyrpg.mongodb.net/StoryMultiVerse?retryWrites=true&w=majority";
const dbName = "StoryMultiVerse";

let users = JSON.parse(
  fs.readFileSync(
    "/Users/tamcol/Documents/4- GitHub/StorymultiverseApp/frontend/src/data/userData.json",
    "utf8"
  )
);
let storyData = JSON.parse(
  fs.readFileSync(
    "/Users/tamcol/Documents/4- GitHub/StorymultiverseApp/frontend/src/data/storyData.json",
    "utf8"
  )
);

MongoClient.connect(
  url,
  { useUnifiedTopology: true },
  async function (err, client) {
    if (err) {
      console.error("Error connecting to MongoDB", err);
      return;
    }

    console.log("Connected successfully to server");
    const db = client.db(dbName);

    // Drop the collections
    await db
      .collection("users")
      .drop()
      .catch((err) => console.log("Users collection might not exist yet."));
    await db
      .collection("stories")
      .drop()
      .catch((err) => console.log("Stories collection might not exist yet."));

    // Insert users
    db.collection("users").insertMany(users, function (err, r) {
      if (err) {
        console.error("Error inserting users", err);
        return;
      }
      console.log("Inserted", r.insertedCount, "users");

      // Insert stories
      db.collection("stories").insertMany(storyData, function (err, r) {
        if (err) {
          console.error("Error inserting stories", err);
          return;
        }
        console.log("Inserted", r.insertedCount, "stories");
        client.close();
      });
    });
  }
);
