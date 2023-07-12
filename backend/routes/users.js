const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const userDataPath = "userData.json";

const getUsers = () => {
  const rawData = fs.readFileSync(userDataPath);
  const data = JSON.parse(rawData);
  return data.users;
};

const addUser = (newUser) => {
  const rawData = fs.readFileSync(userDataPath);
  const data = JSON.parse(rawData);

  data.users.push(newUser);

  fs.writeFileSync(userDataPath, JSON.stringify(data));
};

const updateUser = (userId, updatedUser) => {
  const rawData = fs.readFileSync(userDataPath);
  const data = JSON.parse(rawData);

  const userIndex = data.users.findIndex((user) => user.userId === userId);
  if (userIndex !== -1) {
    data.users[userIndex] = { ...data.users[userIndex], ...updatedUser };
    fs.writeFileSync(userDataPath, JSON.stringify(data));
  }
};

const deleteUser = (userId) => {
  const rawData = fs.readFileSync(userDataPath);
  const data = JSON.parse(rawData);

  const userIndex = data.users.findIndex((user) => user.userId === userId);
  if (userIndex !== -1) {
    data.users.splice(userIndex, 1);
    fs.writeFileSync(userDataPath, JSON.stringify(data));
  }
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
