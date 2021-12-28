"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodeEnum_1 = require("./errorCodeEnum");
class ErrorResult {
    constructor(error_code, error, message) {
        this.error_code = errorCodeEnum_1.default.ERROR;
        this.error_code = error_code;
        this.error = error;
        this.message = message;
    }
}
exports.default = ErrorResult;
//# sourceMappingURL=errorResult.js.map