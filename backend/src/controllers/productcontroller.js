
const multer = require('multer');
const cloudinary = require('../utils/cloudinary.js');
const fs = require('fs');
const ProductModel = require('../models/product.model.js');

const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;

  try {
    const arrayImage = req.files && req.files?.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: 'uploads',
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
    });
    return res.status(201).send({
      message: 'Image Successfully Uploaded',
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: 'Multer error plese send image less than 5 ',
        success: false,
      });
    }

    return res.status(500).send({ message: er.message, success: false });
  }
};


const getProductDataController= async (req,res)=>{
  try {
    const data= await ProductModel.find();
    return res.status(200).send({data, message:"Data fetched successfully"})
    
  } catch (error) {
    return res.status(500).send({message: error.message, success:false})
  }
}


const updateProductController=async(req, res)=>{
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;
  const {id}=req.params;
  try {
    const checkIfProductExists= await ProductModel.findOne({_id:id});
    if(!checkIfProductExists){
      return res.status(404).send({message: "Product not found"})
    }
    const arrayImage = req.files?.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: 'uploads',
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });
    const ImageData=await Promise.all(arrayImage);
    const findAndUpdate=await ProductModel.findByIdAndUpdate({_id:id}, {title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
    images: ImageData}, {new:true})
      return res.status(201).send({message:"Document updated successfully", sucess: true, UpdatedResult: findAndUpdate})
  } catch (error) {
    return res.send(500).send({message: error.message, sucess: false})
  }
}
// controller
const getSinglePRoductDocumentController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductModel.findOne({ _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).send({ Message: 'Product Not Found' });
    }

    return res
      .status(200)
      .send({ message: 'Product Successfully fetched', data, success: true });
  } catch (er) {
    return res.status(200).send({ message: er.message, success: false });
  }
};
const deleteSingleProduct= async(req, res)=>{
  const {id}=req.params;
  try{
    const data=await ProductModel.findOne({_id: id});
    if (!data){
      return res.status(404).send({message: 'Product not found'});
    }
    await ProductModel.findByIdAndDelete({_id: id});
    const newData= await ProductModel.find();
    return res.status(200).send({
      message: 'Product successfully fetched',
      data: newData,
      success: true,
    })
  } catch(error){
    return res.status(500).send({message: error.message, success: false})
  }
}
module.exports = { createProductController, getProductDataController, updateProductController, getSinglePRoductDocumentController, deleteSingleProduct };
