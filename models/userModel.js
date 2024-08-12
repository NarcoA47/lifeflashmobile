import mongoose  from "mongoose";


const UserSchema = new mongoose.Schema({

    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    verified: {type: Boolean},
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);
export default User;