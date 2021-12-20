import ErrorCodeEnum from './errorCodeEnum';

export default class ErrorResult<T> {
  private error_code = ErrorCodeEnum.ERROR;
  private error: T;
  private message: string;

  constructor(error_code: number, error: T, message: string) {
    this.error_code = error_code;
    this.error = error;
    this.message = message;
  }
}
