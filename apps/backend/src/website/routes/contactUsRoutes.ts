import express from "express";
const router = express.Router();

import {
    contactUsController,

} from "../controllers/contactUsController";

// import {
//   requestValidator,
//   validateUpdateCoachProfile,
//   validateUpdateFcmToken,
// } from "../../middleware/validator.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/contactUs",  contactUsController); //optimized


export default router;
