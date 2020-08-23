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
exports.PizzasController = void 0;
const common_1 = require("@nestjs/common");
const create_pizza_dto_1 = require("../../dto/create-pizza.dto");
const pizzas_service_1 = require("./pizzas.service");
const qr_interceptor_1 = require("../../interceptors/qr.interceptor");
let PizzasController = (() => {
    let PizzasController = class PizzasController {
        constructor(pizzasService) {
            this.pizzasService = pizzasService;
        }
        create(pizzaData) {
            return this.pizzasService.create(pizzaData);
        }
        findAll(req) {
            return this.pizzasService.findAll(req.qs);
        }
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_pizza_dto_1.CreatePizzaDto]),
        __metadata("design:returntype", Promise)
    ], PizzasController.prototype, "create", null);
    __decorate([
        common_1.UseInterceptors(qr_interceptor_1.QueryResultInterceptor),
        common_1.Get(),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PizzasController.prototype, "findAll", null);
    PizzasController = __decorate([
        common_1.Controller('pizzas'),
        __metadata("design:paramtypes", [pizzas_service_1.PizzasService])
    ], PizzasController);
    return PizzasController;
})();
exports.PizzasController = PizzasController;
//# sourceMappingURL=pizzas.controller.js.map