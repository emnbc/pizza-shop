"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orders_service_1 = require("./orders.service");
const orders_controller_1 = require("./orders.controller");
const order_entity_1 = require("../../entities/order.entity");
const orders_product_entity_1 = require("../../entities/orders-product.entity");
const pizza_entity_1 = require("../../entities/pizza.entity");
const pizzas_module_1 = require("../pizzas/pizzas.module");
let OrdersModule = (() => {
    let OrdersModule = class OrdersModule {
    };
    OrdersModule = __decorate([
        common_1.Module({
            providers: [orders_service_1.OrdersService],
            imports: [
                typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order, orders_product_entity_1.OrdersProduct, pizza_entity_1.Pizza]),
                pizzas_module_1.PizzasModule
            ],
            exports: [orders_service_1.OrdersService],
            controllers: [orders_controller_1.OrdersController]
        })
    ], OrdersModule);
    return OrdersModule;
})();
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map