import express from 'express';
import Order from '../../models/Orders.mjs';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, items, total, shippingAddress } = req.body;
    if (!userId) return res.status(400).json({ errors: [{ msg: 'User ID required' }] });
    const order = new Order({
      user: userId,
      items,
      total,
      shippingAddress,
      status: 'pending',
    });

    await order.save();
    res.status(201).json({ msg: 'Order placed successfully', order });
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
});

export default router;
