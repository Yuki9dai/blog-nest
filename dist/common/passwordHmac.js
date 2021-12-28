"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSalt = void 0;
const crypto = require("crypto");
function makeSalt(password) {
    const hmac = crypto.createHmac('sha1', 'yuki9dai');
    const result = hmac.update(password).digest('hex');
    return result;
}
exports.makeSalt = makeSalt;
//# sourceMappingURL=passwordHmac.js.map