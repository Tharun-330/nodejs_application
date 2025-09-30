let products = [];

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
};
