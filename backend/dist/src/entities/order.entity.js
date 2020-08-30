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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const orders_product_entity_1 = require("./orders-product.entity");
let Order = (() => {
    let Order = class Order {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Order.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.OneToMany(type => orders_product_entity_1.OrdersProduct, ordersProduct => ordersProduct.order),
        __metadata("design:type", Array)
    ], Order.prototype, "products", void 0);
    __decorate([
        typeorm_1.Column({ type: "real" }),
        __metadata("design:type", Number)
    ], Order.prototype, "deliveryPrice", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamp" }),
        __metadata("design:type", String)
    ], Order.prototype, "date", void 0);
    Order = __decorate([
        typeorm_1.Entity()
    ], Order);
    return Order;
})();
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map