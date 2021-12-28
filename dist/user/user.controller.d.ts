import { QueryUserDto, RegisterUserDto, EditUserDto, loginUserDto, EditUserAvatorDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserInfo(params: QueryUserDto): Promise<import("../common/successResult").default<(import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]> | import("../common/errorResult").default<any>>;
    getAllUser(): Promise<import("../common/successResult").default<(import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>>;
    registerUser(userInfo: RegisterUserDto): Promise<import("../common/errorResult").default<any> | import("../common/successResult").default<{
        userid: string;
    }>>;
    loginUser(userInfo: loginUserDto): Promise<import("../common/successResult").default<{
        token: string;
    }>>;
    editUserInfo(userInfo: EditUserDto): Promise<string>;
    editUserAvator(userInfo: EditUserAvatorDto): Promise<string>;
}
