export default class SuccessResult<T> {
    private error_code;
    private result;
    private message;
    constructor(error_code: number, result: T, message: string);
}
