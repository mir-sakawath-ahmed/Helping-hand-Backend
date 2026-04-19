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