import ErrorCodeEnum from './errorCodeEnum';

export default class SuccessResult<T> {
  private error_code = ErrorCodeEnum.SUCCESS;
  private result: T;
  private message: string;

  constructor(error_code: number, result: T, message: string) {
    this.error_code = error_code;
    this.result = result;
    this.message = message;
  }
}
