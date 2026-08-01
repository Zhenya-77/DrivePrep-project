import { model, Schema } from 'mongoose';

const ruleSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    image: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Rule = model('Rule', ruleSchema);
