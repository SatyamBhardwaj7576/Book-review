const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const existing = await Review.findOne({ bookId: req.params.id, userId: req.user.id });
  if (existing) return res.status(400).json({ msg: 'Review already exists' });
  const review = new Review({ bookId: req.params.id, userId: req.user.id, ...req.body });
  await review.save();
  res.json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findOne({ _id: req.params.id, userId: req.user.id });
  if (!review) return res.status(404).json({ msg: 'Review not found' });
  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!review) return res.status(404).json({ msg: 'Review not found' });
  res.json({ msg: 'Review deleted' });
};