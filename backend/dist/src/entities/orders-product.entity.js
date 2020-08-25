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
exports.OrdersProduct = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const pizza_entity_1 = require("./pizza.entity");
let OrdersProduct = (() => {
    let OrdersProduct = class OrdersProduct {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrdersProduct.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(type => order_entity_1.Order, order => order.products),
        __metadata("design:type", order_entity_1.Order)
    ], OrdersProduct.prototype, "order", void 0);
    __decorate([
        typeorm_1.OneToOne(typy => pizza_entity_1.Pizza),
        typeorm_1.JoinColumn(),
        __metadata("design:type", pizza_entity_1.Pizza)
    ], OrdersProduct.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrdersProduct.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column({ type: "real" }),
        __metadata("design:type", Number)
    ], OrdersProduct.prototype, "price", void 0);
    OrdersProduct = __decorate([
        typeorm_1.Entity()
    ], OrdersProduct);
    return OrdersProduct;
})();
exports.OrdersProduct = OrdersProduct;
//# sourceMappingURL=orders-product.entity.js.map