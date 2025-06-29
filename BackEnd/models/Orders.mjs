import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  items: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  total: Number,
  shippingAddress: {
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
  },
}, { timestamps: true });

// Schema
export default mongoose.model('Orders', OrderSchema);
