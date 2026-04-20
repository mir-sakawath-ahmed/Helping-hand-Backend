const express = require("express");
const router = express.Router();
const {
  createReview,
  getAllReviews,
  getMyReviews,
} = require("../controllers/reviewController");
const { protect } = require("../middleware/auth");

router.get("/", getAllReviews);
router.get("/my", protect, getMyReviews);
router.post("/", protect, createReview);

module.exports = router;