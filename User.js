import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  location: { type: String },
  profilePhoto: { type: String },
  skillsOffered: [String],
  skillsWanted: [String],
  availability: [String],
  isPublic: { type: Boolean, default: true },
  role: { type: String, default: 'user' },
  rating: { type: Number, default: 0 },
  feedbacks: [
    {
      text: String,
      date: Date,
      from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ]
});

export default mongoose.model('User', userSchema);
