
import { Schema, model, Document } from 'mongoose';
import { ICategory } from './Category';

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: ICategory['_id'];
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
});

export const Product = model<IProduct>('Product', productSchema);
