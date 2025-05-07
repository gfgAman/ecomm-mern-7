import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({}, { strict: false, collection: 'products' });


export default mongoose.model('Product', productSchema);
