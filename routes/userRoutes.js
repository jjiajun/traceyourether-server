const express = require("express");
const userRouter = express.Router();

module.exports = (controller, verifyToken) => {
  userRouter.get(
    "/getallusersdata",
    verifyToken(),
    controller.getAllUsersData.bind(controller)
  );
  userRouter.post(
    "/getuserprofilebyid",
    verifyToken(),
    controller.getUserProfileById.bind(controller)
  );
  userRouter.post(
    "/getuserprofilebywallet",
    verifyToken(),
    controller.getUserProfileByWallet.bind(controller)
  );
  userRouter.post(
    "/addfriendbyemail",
    verifyToken(),
    controller.addFriendByEmail.bind(controller)
  );
  // userRouter.post("/postdata", controller.postData.bind(controller));
  userRouter.post("/login", controller.logIn.bind(controller));
  userRouter.post("/signup", controller.signUp.bind(controller));
  return userRouter;
};
