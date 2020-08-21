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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
let UsersService = (() => {
    let UsersService = class UsersService {
        constructor(usersRepository) {
            this.usersRepository = usersRepository;
        }
        async create(userData) {
            const user = this.usersRepository.create(userData);
            try {
                const _a = await this.usersRepository.save(user), { password } = _a, result = __rest(_a, ["password"]);
                return result;
            }
            catch (err) {
                if (err.code === '23505') {
                    throw new common_1.ConflictException('Username has already been taken');
                }
                throw new common_1.InternalServerErrorException();
            }
        }
        async findAll(qs) {
            return {
                count: await this.usersRepository.count(Object.assign({}, qs.where)),
                result: await this.usersRepository.find(Object.assign({}, qs))
            };
        }
        async findOne(id) {
            return this.usersRepository.findOne(id);
        }
        async findUser(email) {
            return this.usersRepository.createQueryBuilder('user')
                .where('user.email = :email', { email: email })
                .addSelect('user.password')
                .getOne();
        }
        async remove(id) {
            await this.usersRepository.delete(id);
        }
    };
    UsersService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], UsersService);
    return UsersService;
})();
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map