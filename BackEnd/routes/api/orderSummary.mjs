import express from 'express';
import OrderSummary from '../../models/OrderSummary.mjs';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, totalPrice, orderDetails, deliveryDate } = req.body;
    const newSummary = new OrderSummary({
      user: userId,
      totalPrice,
      orderDetails,
      deliveryDate,
    });

    await newSummary.save();

    res.status(201).json({ msg: 'Order summary saved', summary: newSummary });
  } catch (err) {
    console.error('Error in saving the order summary:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
