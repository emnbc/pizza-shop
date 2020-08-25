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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orders_product_entity_1 = require("../../entities/orders-product.entity");
const order_entity_1 = require("../../entities/order.entity");
const pizza_entity_1 = require("../../entities/pizza.entity");
const pizzas_service_1 = require("../pizzas/pizzas.service");
const deliveryPrice = 2.99;
let OrdersService = (() => {
    let OrdersService = class OrdersService {
        constructor(pizzasService, orderRepository, ordersProductRepository, pizzaRepository) {
            this.pizzasService = pizzasService;
            this.orderRepository = orderRepository;
            this.ordersProductRepository = ordersProductRepository;
            this.pizzaRepository = pizzaRepository;
        }
        async getPizzaPrice(id) {
            const pizza = await this.pizzasService.findById(id);
            return pizza.price;
        }
        getDeliveryPrice() {
            return deliveryPrice;
        }
        async create(orderData) {
            const products = [];
            for (const el of orderData.products) {
                const pizza = this.pizzaRepository.create({ id: el.product });
                const price = await this.getPizzaPrice(el.product);
                products.push(this.ordersProductRepository.create({
                    product: pizza,
                    quantity: el.quantity,
                    price: price
                }));
            }
            try {
                await this.ordersProductRepository.save(products);
            }
            catch (err) {
                throw new common_1.InternalServerErrorException(err);
            }
            console.log(products);
            const order = this.orderRepository.create({
                email: orderData.email,
                firstName: orderData.firstName,
                lastName: orderData.lastName,
                address: orderData.address,
                products: products,
                deliveryPrice: this.getDeliveryPrice()
            });
            try {
                return await this.orderRepository.save(order);
            }
            catch (err) {
                throw new common_1.InternalServerErrorException(err);
            }
        }
        async find() {
            return await this.orderRepository.find({ relations: ["products", "products.product"] });
        }
    };
    OrdersService = __decorate([
        common_1.Injectable(),
        __param(1, typeorm_1.InjectRepository(order_entity_1.Order)),
        __param(2, typeorm_1.InjectRepository(orders_product_entity_1.OrdersProduct)),
        __param(3, typeorm_1.InjectRepository(pizza_entity_1.Pizza)),
        __metadata("design:paramtypes", [pizzas_service_1.PizzasService,
            typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.Repository])
    ], OrdersService);
    return OrdersService;
})();
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map