const Product = require("../model/Productmodel");
const multer  = require('multer');



//Add Product Api

const AddProduct = async (req, res) => {
    try {
        console.log("Data" ,req.file)
        console.log("req", req)
      const file = req.file;
      if(!file)
      return res.status(400).send('No image are upload in the request');

      const fileName = file.filename;
      const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
      
      
       let myproduct = new Product
       ({
         title : req.body.title,
         price : req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: `${basePath}${fileName}`,
        rating: {
          rate: req.body.rate,
          count: req.body.count 
        }
      })

  

    myproduct = await myproduct.save();

    if (!myproduct) return res.status(500).send('The product cannot be created');

    res.send(myproduct);


    } catch (e) {
      res.status(400).send(e.message);
    }
  };

  //Get all Product

const GetProduct = async (req,res) => {
    try{
      const getproduct = await Product.find({});
      res.send(getproduct);
    }catch(e) {
      res.status(400).send(e.message);
    }
 }

 // Get Product by id
const  GetProductById = async(req,res) => {
    try {
      const _id = req.params.id;
      const getproductbyid = await Product.findById(_id);
      res.send(getproductbyid)
    }catch(e) {
      res.status(400).send(e.message);
    }
  }



  module.exports = {AddProduct,GetProduct,GetProductById}
