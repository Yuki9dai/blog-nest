export default class ErrorResult<T> {
    private error_code;
    private error;
    private message;
    constructor(error_code: number, error: T, message: string);
}
