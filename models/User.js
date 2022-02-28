const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      match: /.+\@.+\..+/,
    },
    password: { type: String,required: true },
    address: { type: String,required: true ,unique: true },
    // walletBalance: Number,
    // requests: []
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
  },
  /**
   * The { timestamps: true } tells Mongoose to automatically add createdAt and updatedAt properties to the schema. By default, createdAt and updatedAt are of type "Date".
   * When you update a document, Mongoose automatically increments updatedAt.
   * */
  { timestamps: true }
);

module.exports = model("User", userSchema);
