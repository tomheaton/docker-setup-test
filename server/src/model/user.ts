import {model, Schema} from "mongoose";

interface IUser {
    username: string;
    name: string;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const User = model<IUser>('User', userSchema);

export {User};
