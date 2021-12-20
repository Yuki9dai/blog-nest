export class UserInfoDto {
  readonly userid: string;
  readonly username: string;
  readonly nickname: string;
  readonly job: string[];
  readonly introduce: string;
  readonly avatar: string;
  readonly createTime: string;
}

export class QueryUserDto {
  readonly userid: string;
}

export class RegisterUserDto {
  username: string;
  nickname?: string;
  password: string;
  email?: string;
}
