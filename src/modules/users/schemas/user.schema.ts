import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicture: { type: String, required: false },  // Made this optional and not unique
    isActive: { type: Boolean, required: true, default: true },  // Changed type to Boolean with a default value
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: false, default: 'user' }, // Made this optional and not unique
});
