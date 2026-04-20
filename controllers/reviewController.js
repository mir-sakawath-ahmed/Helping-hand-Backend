const Review = require("../models/Review");

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "Rating and comment are required",
      });
    }

    const review = await Review.create({
      user: req.user._id,
      rating,
      comment,
    });

    const populated = await review.populate("user", "name");

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: populated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("user", "name")
      .sort({ createdAt: -1 });
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getMyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createReview, getAllReviews, getMyReviews };