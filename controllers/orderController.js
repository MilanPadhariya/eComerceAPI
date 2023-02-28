const Order = require("./../modals/orderModal");
const Product = require("./../modals/productModal");
const Order_Products = require("./../modals/order_ProductsModal");

exports.createOrder = async (req, res) => {
  try {
    // 1) get all products of given id
    const products = await Product.find({
      _id: { $in: req.body.products },
    });

    // 2) map through the products to find the total amount
    let amount = 0;
    products.map((product) => (amount += product.price));

    // 3) create the order with amount and date
    const orderData = {
      date: new Date(),
      total: amount,
    };
    const order = await Order.create(orderData);

    // 4) create the order_products entry
    const order_product = await Order_Products.create({
      orderId: order.id,
      productId: req.body.products,
    });

    // if all the above processing is done successfully then send the success response
    res.status(201);
    res.json({
      status: "Success",
      data: {
        order_product,
        total_amount: amount,
      },
    });
  } catch (err) {
    // occured some error during the above processing then send response with error
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};
