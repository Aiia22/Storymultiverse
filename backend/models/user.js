const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const userDataPath = "userData.json";

class User {
  static getUsers() {
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);
    return data.users;
  }

  static getUserById(userId) {
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);
    return data.users.find((user) => user.userId === userId);
  }

  static createUser(newUser) {
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    newUser.userId = uuidv4();
    data.users.push(newUser);

    fs.writeFileSync(userDataPath, JSON.stringify(data));

    return newUser;
  }

  static updateUser(userId, updatedUser) {
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    const userIndex = data.users.findIndex((user) => user.userId === userId);
    if (userIndex !== -1) {
      data.users[userIndex] = { ...data.users[userIndex], ...updatedUser };
      fs.writeFileSync(userDataPath, JSON.stringify(data));
      return data.users[userIndex];
    }

    return null;
  }

  static deleteUser(userId) {
    const rawData = fs.readFileSync(userDataPath);
    const data = JSON.parse(rawData);

    const userIndex = data.users.findIndex((user) => user.userId === userId);
    if (userIndex !== -1) {
      const deletedUser = data.users.splice(userIndex, 1);
      fs.writeFileSync(userDataPath, JSON.stringify(data));
      return deletedUser[0];
    }

    return null;
  }
}

module.exports = User;
