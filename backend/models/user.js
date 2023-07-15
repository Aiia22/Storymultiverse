// Importing the fs module for file system operations
const fs = require("fs");

// Importing the uuid module to generate unique identifiers
const { v4: uuidv4 } = require("uuid");

// --------must replace logic by mongoDB connexion as it use a json file for now ------------------

// Setting the file path for the user data
const userDataPath = "userData.json"; // Does not exist

// Defining a User class
class User {
  // Method to get all users
  static getUsers() {
    // Reading the user data from the file
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    // Returning the array of users from the data
    return data.users;
  }

  // Method to get a user by their ID
  static getUserById(userId) {
    // Reading the user data from the file
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    // Finding the user with the specified ID and returning it
    return data.users.find((user) => user.userId === userId);
  }

  // Method to create a new user
  static createUser(newUser) {
    // Reading the user data from the file
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    // Generating a unique ID for the new user
    newUser.userId = uuidv4();

    // Adding the new user to the data
    data.users.push(newUser);

    // Writing the updated user data back to the file
    fs.writeFileSync(userDataPath, JSON.stringify(data));

    // Returning the newly created user
    return newUser;
  }

  // Method to update a user by their ID
  static updateUser(userId, updatedUser) {
    // Reading the user data from the file
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    // Finding the index of the user with the specified ID
    const userIndex = data.users.findIndex((user) => user.userId === userId);

    // Checking if the user exists
    if (userIndex !== -1) {
      // Updating the user with the new information
      data.users[userIndex] = { ...data.users[userIndex], ...updatedUser };

      // Writing the updated user data back to the file
      fs.writeFileSync(userDataPath, JSON.stringify(data));

      // Returning the updated user
      return data.users[userIndex];
    }

    // If the user does not exist, return null
    return null;
  }

  // Method to delete a user by their ID
  static deleteUser(userId) {
    // Reading the user data from the file
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    // Finding the index of the user with the specified ID
    const userIndex = data.users.findIndex((user) => user.userId === userId);

    // Checking if the user exists
    if (userIndex !== -1) {
      // Removing the user from the data array
      const deletedUser = data.users.splice(userIndex, 1);

      // Writing the updated user data back to the file
      fs.writeFileSync(userDataPath, JSON.stringify(data));

      // Returning the deleted user
      return deletedUser[0];
    }

    // If the user does not exist, return null
    return null;
  }
}

// Exporting the User class
module.exports = User;
