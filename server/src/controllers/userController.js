import createHttpError from 'http-errors';
import { saveFileCloudinary } from '../utils/cloudinary.js';
import { User } from '../models/user.js';

export async function updateUserAvatar(req, res) {
  const { file, user } = req;
  if (!file) {
    throw createHttpError(400, 'No file');
  }

  const result = await saveFileCloudinary(file.buffer, user._id);

  const updatedUser = await User.findByIdAndUpdate(
    { _id: user._id },
    { avatar: result.secure_url },
    { returnDocument: 'after' }
  );

  if (!updatedUser) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json({ url: updatedUser.avatar });
}

export async function updateUserProfile(req, res) {
  const { userName } = req.body;
  const { user } = req;

  const updateUser = await User.findByIdAndUpdate(
    user._id,
    { userName },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updateUser) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json({ updateUser });
}
