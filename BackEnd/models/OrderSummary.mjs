import mongoose from 'mongoose';

const OrderSummary = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderDetails: {
      shape: String,
      size: String,
      layer: String,
      flavor: String,
      frostingColor1: String,
      frostingColor2: String,
      frostingColor3: String,
      userFrostingDesign: String,
      cakeText: String,
      cakeDecor: String,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'shipped', 'delivered'],
      default: 'pending',
    },
  }, { timestamps: true });
  
  export default mongoose.model('OrderSummary', OrderSummary);
