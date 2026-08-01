import { model, Schema } from 'mongoose';

const questionSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
    question: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    answers: {
      type: [
        {
          text: {
            type: String,
            required: true,
            trim: true,
          },
          isCorrect: {
            type: Boolean,
            default: false,
          },
        },
      ],
      required: true,
    },
    explanation: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

export const Question = model('Question', questionSchema);
