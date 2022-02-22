// const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User.js");
// const Group = require("../models/Group.js");

const bcrypt = require("bcrypt");

const hash = bcrypt.hashSync("123", 10);

/** Create connection to mongodb */
mongoose.connect("mongodb://127.0.0.1:27017/cryptopay", () => {
  console.log("connected to mongodb");
});

const userSeeds = [
  {
    name: "Dom",
    email: "dom@gmail.com",
    password: hash,
    address: "1234567890",
    walletBalance: 0,
  },
  {
    name: "Tris",
    email: "tris@gmail.com",
    password: hash,
    address: "0987654321",
    walletBalance: 0,
  },
];
runSeeder = async () => {
  console.log("test");
  // delete all existing records in the DB
  await User.deleteMany({});
  // inserts seed data
  const users = await User.insertMany(userSeeds);
  console.log("Inserted userSeeds. This is the result: ", users);
  // find all names in the db
  const allNames = await User.find().select("name");
  console.log("All the users in our app", allNames);
  // get all the userIds
  const userIds = allNames.map((el) => el._id);
  console.log("All the userIds in our app", userIds);

  // // delete all existing records in the DB
  // await Group.deleteMany({});
  // // create group with all seed userIds as members (and the first seed userId as the admin)
  // const groupOne = await Group.create({
  //   name: "FTBC5",
  //   admin: userIds[0],
  //   members: userIds,
  // });
  // console.log("this is groupOne before population", groupOne);
  // // populate group with member data
  // // not done
};

runSeeder().then(() => {
  mongoose.connection.close();
});

// await Group.deleteMany({});
// const group1 = new Group({});
