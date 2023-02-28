const Product = require("./../modals/productModal");

exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201);
    res.json({
      status: "Success",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      status: "Success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getProductsOfCategory = async (req, res) => {
  try {
    const categoryid = req.query.category;
    const products = await Product.find({
      categoryId: `${categoryid}`,
    });
    res.status(200).json({
      status: "Success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};
