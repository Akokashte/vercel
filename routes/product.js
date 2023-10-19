const express = require('express')
const productController = require('../controller/product.js')
const {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct} = productController;

const router = express.Router();

router
.post('/',createProduct)
.get("/",getAllProducts)
.get("/:id",getProduct)
.put("/:id",replaceProduct)
.patch("/:id", updateProduct)
.delete("/:id", deleteProduct)

exports.router = router;