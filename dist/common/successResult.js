"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodeEnum_1 = require("./errorCodeEnum");
class SuccessResult {
    constructor(error_code, result, message) {
        this.error_code = errorCodeEnum_1.default.SUCCESS;
        this.error_code = error_code;
        this.result = result;
        this.message = message;
    }
}
exports.default = SuccessResult;
//# sourceMappingURL=successResult.js.map