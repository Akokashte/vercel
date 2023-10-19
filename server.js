const express = require("express");
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');

require("dotenv").config();
const port = process.env.PORT;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecomerce');
  console.log('database connected successfully')
}

// middlewares in express
// express.json() middleware is used to parse json into js so here in order to use req.body content we need not to import body-parser
server.use(cors())
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use(express.json());
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname);
  next();
});
server.use('/products',productRouter.router)
server.use('/user',userRouter.router)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

// 8AJcBmdLNah62cn6-- mongoatlas

// MVC Model View Controller
// this are also known as api,endpoint,route
// create POST '/products' 
// chaining of api
server.listen(port, (req, res) => {
  console.log(`listening at port ${port}`);
});


