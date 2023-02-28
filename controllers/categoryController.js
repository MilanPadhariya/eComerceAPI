const Category = require("./../modals/categoryModal");

// to create a new category
exports.addCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await Category.create(categoryData);
    res.status(201);
    res.json({
      status: "Success",
      data: {
        newCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

// to get all the categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json({
      status: "Success",
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};
