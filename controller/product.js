const Products = require("../model/productStructure");

const addProduct = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    } = req.body;

const result = await Products.insertMany({id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,})

    res.send({msg:"Product Stored successfully",Result:result})
  } catch (err) {
    console.log("Error while inserting", err);

  }
};

const fetchProducts = async (req, res) => {
  const result = await Products.find();
  return res.send({ msg: "Products Fetched", Result: result });

}
module.exports={addProduct, fetchProducts}
