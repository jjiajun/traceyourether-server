const { Schema, model } = require("mongoose");

const groupSchema = new Schema(
  {
    name: String,
    // for this project, we will only allow one admin
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  /**
   * The { timestamps: true } tells Mongoose to automatically add createdAt and updatedAt properties to the schema. By default, createdAt and updatedAt are of type "Date".
   * When you update a document, Mongoose automatically increments updatedAt.
   * */
  { timestamps: true }
);

module.exports = model("Group", groupSchema);
