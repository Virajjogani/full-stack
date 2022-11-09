import express from "express";
import {
  Addhotel,
  DeleteHotel,
  GetallHotels,
  GetsingleHotels,
  updatehotel
} from "../controller/hotelcontroller.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// --------------------------------------------------
router.post("/addhotel", verifyAdmin, Addhotel);
router.put("/updatehotel/:id", verifyAdmin, updatehotel);
router.delete("/deletehotel/:id", verifyAdmin, DeleteHotel);
router.get("/getallhotels", GetallHotels);
router.get("/gethotel/:id", GetsingleHotels); 

// --------------------------------------------------

export default router;
