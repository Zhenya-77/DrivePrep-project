import { model, Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

export const Category = model('Category', categorySchema);
