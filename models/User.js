import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    creationTime: {type: Date, default: Date.now},
    updateTime: {type: Date}
});

const User = mongoose.model('User', UserSchema);
export default User;
