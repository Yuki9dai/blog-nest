import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { QueryUserDto, RegisterUserDto, loginUserDto } from './user.dto';
import SuccessResult from '../common/successResult';
import ErrorResult from '../common/errorResult';
import ErrorCodeEnum from '../common/errorCodeEnum';
import { InjectModel } from '@nestjs/mongoose';
import { makeSalt } from '../common/passwordHmac';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async getUser(userInfo: QueryUserDto) {
    try {
      if (userInfo.userid) {
        const result = await this.userModel.find({ userid: userInfo.userid });
        return new SuccessResult(ErrorCodeEnum.SUCCESS, result, '查询账户成功');
      } else {
        return new ErrorResult(
          ErrorCodeEnum.ERROR,
          { message: '传入id类型错误' },
          '传入id类型错误',
        );
      }
    } catch (error) {
      return new ErrorResult(ErrorCodeEnum.ERROR, error, '查询账户失败');
    }
  }

  async getAllUser() {
    const result = await this.userModel.find().exec();
    return new SuccessResult(ErrorCodeEnum.SUCCESS, result, '查询账户成功');
  }

  async addRegisterInfo(userInfo: RegisterUserDto) {
    const num = await this.userModel.collection.countDocuments();
    const { username, nickname, password, email } = userInfo;
    const userid = num.toString().padStart(6, '0');
    return {
      userid,
      username,
      password: makeSalt(password),
      nickname: nickname || '',
      email: email || '',
      job: [],
      introduce: '',
      avatar: '',
      createTime: '',
    };
  }

  async register(userInfo: RegisterUserDto) {
    try {
      if (!userInfo.username) {
        return new ErrorResult(
          ErrorCodeEnum.ERROR,
          { message: '用户名称不能为空' },
          '注册失败',
        );
      } else if (!userInfo.password) {
        return new ErrorResult(
          ErrorCodeEnum.ERROR,
          { message: '密码不能为空' },
          '注册失败',
        );
      } else {
        const userAllInfo = await this.addRegisterInfo({
          ...userInfo,
          password: makeSalt(userInfo.password),
        });
        const isUserNameExit = await this.userModel.find({
          username: userInfo.username,
        });
        if (isUserNameExit.length > 0) {
          return new ErrorResult(ErrorCodeEnum.ERROR, '', '用户名重复');
        }
        const createUser = new this.userModel(userAllInfo);
        await createUser.save();
        return new SuccessResult(
          ErrorCodeEnum.SUCCESS,
          { userid: userAllInfo.userid },
          '注册成功',
        );
      }
    } catch (error) {
      return new ErrorResult(ErrorCodeEnum.ERROR, error, '注册失败');
    }
  }

  async loginUser(userInfo: loginUserDto) {
    const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    let result = null;
    if (reg.test(userInfo.username)) {
      result = await this.userModel.find({ email: userInfo.username });
    } else {
      result = await this.userModel.find({ username: userInfo.username });
    }
    if (result && result.password === userInfo.password.trim()) {
      return new SuccessResult(
        ErrorCodeEnum.SUCCESS,
        { token: '111' },
        '登陆成功',
      );
    }
  }

  async editUserInfo(userInfo) {
    return 'editInfo';
  }

  async editUserAvator(userInfo) {
    return 'editAvator';
  }
}
