import express from "express";
import { register, login, checkUsername,  } from "../controllers/auth";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/check/username", checkUsername);

export default router;
