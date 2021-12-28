export declare class UserInfoDto {
    readonly userid: string;
    readonly username: string;
    readonly nickname: string;
    readonly job: string[];
    readonly introduce: string;
    readonly avatar: string;
    readonly createTime: string;
}
export declare class QueryUserDto {
    readonly userid: string;
}
export declare class RegisterUserDto {
    username: string;
    nickname?: string;
    password: string;
    email?: string;
}
export declare class loginUserDto {
    readonly username: string;
    readonly password: string;
}
export declare class EditUserDto {
    readonly nickname: string;
    readonly email: string;
    readonly job: string[];
    readonly introduce: string;
    readonly token: string;
}
export declare class EditUserAvatorDto {
    readonly avatar: string;
    readonly token: string;
}
