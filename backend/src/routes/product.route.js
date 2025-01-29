
// route
const multer = require('multer');
const express = require('express');
const {
  createProductController,
  getProductDataController,
  updateProductController,
  getSinglePRoductDocumentController,
  deleteSingleProduct,
} = require('../controllers/product.controller.js');

const verifyUser = require('../middlewares/jwt-verify.js');
const router = express.Router();

const upload = multer({ dest: 'temp-uploads/' });
router.post(
  '/create-product',
  [upload.array('files', 5), verifyUser],
  createProductController
);
router.put(
  '/update-products/:id',
  upload.array('files', 5),
  updateProductController
);

router.get('/get-products', getProductDataController);
router.get('/get-single/:id', getSinglePRoductDocumentController);
router.delete('/:id', deleteSingleProduct);

module.exports = router;

// route , model , controller
