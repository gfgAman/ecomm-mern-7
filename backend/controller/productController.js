// controllers/products.js
import Product from '../models/productSchema.js';

export const products = async (req, res) => {
    try {
        const data = await Product.find(); // gets all products
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
