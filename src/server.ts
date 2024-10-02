
import express, { Application } from 'express';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import mongoose from 'mongoose';

dotenv.config();

const app: Application = express();
app.use(express.json());

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
