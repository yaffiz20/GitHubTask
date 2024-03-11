import express from "express";
import * as userControler from "../controlers/userControler.js";




const router = express.Router();

router.get("/:id",  userControler.getUserById);
router.post("/", userControler.addUser);
router.put("/:id",userControler.updateUserById);
router.delete("/:id",userControler.deleteUserById);

export default router;


