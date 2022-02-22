const express = require("express");
const userRouter = express.Router();

module.exports = (controller) => {
  userRouter.get(
    "/getallusersdata",
    controller.getAllUsersData.bind(controller)
  );
  userRouter.get(
    "/getuserprofilebyid",
    controller.getUserProfileById.bind(controller)
  );
  // userRouter.post("/postdata", controller.postData.bind(controller));
  userRouter.post("/login", controller.logIn.bind(controller));
  userRouter.post("/signup", controller.signUp.bind(controller));
  return userRouter;
};
