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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const orders_service_1 = require("./orders.service");
const create_order_dto_1 = require("../../dto/create-order.dto");
let OrdersController = (() => {
    let OrdersController = class OrdersController {
        constructor(ordersService) {
            this.ordersService = ordersService;
        }
        create(orderData) {
            return this.ordersService.create(orderData);
        }
        find(req) {
            return this.ordersService.findUserOrders(req.user.email);
        }
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
        __metadata("design:returntype", Promise)
    ], OrdersController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "find", null);
    OrdersController = __decorate([
        common_1.Controller('orders'),
        __metadata("design:paramtypes", [orders_service_1.OrdersService])
    ], OrdersController);
    return OrdersController;
})();
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map