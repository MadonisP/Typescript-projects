import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInput {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
}

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

UserSchema.pre("save", async function (next) {
    let user = this as UserDocument;

    if (!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

const UserModel = mongoose.model<UserDocument>('User', UserSchema)

export default UserModel;