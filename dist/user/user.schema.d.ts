import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User extends Document {
    userid: string;
    username: string;
    password: string;
    nickname: string;
    job: string[];
    introduce: string;
    avatar: string;
    createTime: string;
    email: string;
    token: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any>;
