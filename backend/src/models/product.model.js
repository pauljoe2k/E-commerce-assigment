const mongoose = require('mongoose');
// model
const SchemaObject = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 1 },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  category: { type: String, required: true, enum: ['male', 'female', 'kids'] },
  images: [
    {
      type: String,
      required: true,
      default:
        'https://static.vecteezy.com/system/resources/previews/018/922/122/non_2x/3d-gender-symbol-sign-png.png',
    },
  ],
  //   ["https://imagelink.com","https://imagelink.com","https://imagelink.com" ]
  userEmail: { type: String, require: true },
};

const productSchema = new mongoose.Schema(SchemaObject, { versionKey: false });

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;