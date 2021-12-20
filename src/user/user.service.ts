import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import SuccessResult from '../common/successResult';
import ErrorResult from '../common/errorResult';
import ErrorCodeEnum from '../common/errorCodeEnum';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async getUser(userid: string) {
    try {
      const result = await this.userModel.find({ userid });
      return new SuccessResult(ErrorCodeEnum.SUCCESS, result, '查询账户成功');
    } catch (error) {
      return new ErrorResult(ErrorCodeEnum.ERROR, error, '查询账户失败');
    }
  }
}
