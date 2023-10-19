const model = require("../model/product")
const Product = model.Product;

// createProduct
 exports.createProduct = (req,res)=>{
    const product = new Product(req.body)
    product.save()
    .then((resDoc)=>{
      console.log({resDoc})
      console.log('response saved')
      res.status(201).json(resDoc)
    })
    .catch((err)=>{
      console.log(`err : ${err}`)
      res.status(400).json(err);
    })
  }
  
   exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
  }
  
  exports.getProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)
  }
  
 exports.replaceProduct = async (req, res) => {
   const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  }
  catch(err){
    res.status(400).send({err})
  }
  }
  
 exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
      res.status(201).json(doc)
    }
    catch(err){
      res.status(400).send({err})
    }
  }
  
 exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id:id});
    res.status(201).json(doc)
  }
  catch(err){
    res.status(400).send({err})
  }
  }