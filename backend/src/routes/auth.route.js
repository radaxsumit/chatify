import express from 'express';
import {signup, login, logout, updateProfile} from '../controllers/auth.controller.js';
import {protectRoute} from "../middleware/auth.middleware.js";
import {arcjetProtection} from "../middleware/arcjet.middleware.js";

const router = express.Router();

// To test the ArcjetProtection working or not ✅
// router.get('/test', arcjetProtection, (req, res) => {
//     res.status(200).send({message: "Welcome Arcjet Test."});
// });

router.use(arcjetProtection);    // We don't have to add 'arcjetProtection' in every single route so.

// Authentication routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

// To check User is authenticated or not...
router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router;