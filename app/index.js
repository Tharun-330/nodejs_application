const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const productRoutes = require('./routes/productRoutes');
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Backend API is running!');
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
