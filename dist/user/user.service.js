"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const successResult_1 = require("../common/successResult");
const errorResult_1 = require("../common/errorResult");
const errorCodeEnum_1 = require("../common/errorCodeEnum");
const mongoose_2 = require("@nestjs/mongoose");
const passwordHmac_1 = require("../common/passwordHmac");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getUser(userInfo) {
        try {
            if (userInfo.userid) {
                const result = await this.userModel.find({ userid: userInfo.userid });
                return new successResult_1.default(errorCodeEnum_1.default.SUCCESS, result, '查询账户成功');
            }
            else {
                return new errorResult_1.default(errorCodeEnum_1.default.ERROR, { message: '传入id类型错误' }, '传入id类型错误');
            }
        }
        catch (error) {
            return new errorResult_1.default(errorCodeEnum_1.default.ERROR, error, '查询账户失败');
        }
    }
    async getAllUser() {
        const result = await this.userModel.find().exec();
        return new successResult_1.default(errorCodeEnum_1.default.SUCCESS, result, '查询账户成功');
    }
    async addRegisterInfo(userInfo) {
        const num = await this.userModel.collection.countDocuments();
        const { username, nickname, password, email } = userInfo;
        const userid = num.toString().padStart(6, '0');
        return {
            userid,
            username,
            password: (0, passwordHmac_1.makeSalt)(password),
            nickname: nickname || '',
            email: email || '',
            job: [],
            introduce: '',
            avatar: '',
            createTime: '',
        };
    }
    async register(userInfo) {
        try {
            if (!userInfo.username) {
                return new errorResult_1.default(errorCodeEnum_1.default.ERROR, { message: '用户名称不能为空' }, '注册失败');
            }
            else if (!userInfo.password) {
                return new errorResult_1.default(errorCodeEnum_1.default.ERROR, { message: '密码不能为空' }, '注册失败');
            }
            else {
                const userAllInfo = await this.addRegisterInfo(Object.assign(Object.assign({}, userInfo), { password: (0, passwordHmac_1.makeSalt)(userInfo.password) }));
                const isUserNameExit = await this.userModel.find({
                    username: userInfo.username,
                });
                if (isUserNameExit.length > 0) {
                    return new errorResult_1.default(errorCodeEnum_1.default.ERROR, '', '用户名重复');
                }
                const createUser = new this.userModel(userAllInfo);
                await createUser.save();
                return new successResult_1.default(errorCodeEnum_1.default.SUCCESS, { userid: userAllInfo.userid }, '注册成功');
            }
        }
        catch (error) {
            return new errorResult_1.default(errorCodeEnum_1.default.ERROR, error, '注册失败');
        }
    }
    async loginUser(userInfo) {
        const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        let result = null;
        if (reg.test(userInfo.username)) {
            result = await this.userModel.find({ email: userInfo.username });
        }
        else {
            result = await this.userModel.find({ username: userInfo.username });
        }
        if (result && result.password === userInfo.password.trim()) {
            return new successResult_1.default(errorCodeEnum_1.default.SUCCESS, { token: '111' }, '登陆成功');
        }
    }
    async editUserInfo(userInfo) {
        return 'editInfo';
    }
    async editUserAvator(userInfo) {
        return 'editAvator';
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map