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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const typeorm_1 = require("typeorm");
let Pizza = (() => {
    let Pizza = class Pizza {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Pizza.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pizza.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pizza.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pizza.prototype, "img", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Pizza.prototype, "count", void 0);
    __decorate([
        typeorm_1.Column({ type: "real" }),
        __metadata("design:type", Number)
    ], Pizza.prototype, "price", void 0);
    Pizza = __decorate([
        typeorm_1.Entity()
    ], Pizza);
    return Pizza;
})();
exports.Pizza = Pizza;
//# sourceMappingURL=pizza.entity.js.map