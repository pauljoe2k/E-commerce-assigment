// route
const multer = require('multer');
const upload = multer({ dest: 'temp-uploads/' });
const express = require('express');
const {
  createProductController, getProductDataController
} = require('../controllers/productcontroller.js');
const router = express.Router();

router.post(
  '/create-product',
  upload.array('files', 5),
  createProductController
);
router.get(
  '/get-products',
  getProductDataController
)

module.exports = router;