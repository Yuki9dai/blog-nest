import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { QueryUserDto, RegisterUserDto, loginUserDto } from './user.dto';
import SuccessResult from '../common/successResult';
import ErrorResult from '../common/errorResult';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getUser(userInfo: QueryUserDto): Promise<SuccessResult<(import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]> | ErrorResult<any>>;
    getAllUser(): Promise<SuccessResult<(import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>>;
    addRegisterInfo(userInfo: RegisterUserDto): Promise<{
        userid: string;
        username: string;
        password: string;
        nickname: string;
        email: string;
        job: any[];
        introduce: string;
        avatar: string;
        createTime: string;
    }>;
    register(userInfo: RegisterUserDto): Promise<ErrorResult<any> | SuccessResult<{
        userid: string;
    }>>;
    loginUser(userInfo: loginUserDto): Promise<SuccessResult<{
        token: string;
    }>>;
    editUserInfo(userInfo: any): Promise<string>;
    editUserAvator(userInfo: any): Promise<string>;
}
