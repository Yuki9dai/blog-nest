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

export class loginUserDto {
  readonly email?: string;
  readonly username?: string;
  readonly password: string;
}

export class EditUserDto {
  readonly nickname: string;
  readonly email: string;
  readonly job: string[];
  readonly introduce: string;
  readonly token: string;
}

export class EditUserAvatorDto {
  readonly avatar: string;
  readonly token: string;
}
