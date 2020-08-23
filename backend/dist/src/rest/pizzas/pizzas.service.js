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
exports.PizzasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pizza_entity_1 = require("../../entities/pizza.entity");
let PizzasService = (() => {
    let PizzasService = class PizzasService {
        constructor(pizzasRepository) {
            this.pizzasRepository = pizzasRepository;
        }
        async create(pizzaData) {
            const user = this.pizzasRepository.create(pizzaData);
            try {
                return await this.pizzasRepository.save(user);
            }
            catch (err) {
                throw new common_1.InternalServerErrorException();
            }
        }
        async findAll(qs) {
            return {
                count: await this.pizzasRepository.count(Object.assign({}, qs.where)),
                result: await this.pizzasRepository.find(Object.assign({}, qs))
            };
        }
    };
    PizzasService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(pizza_entity_1.Pizza)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], PizzasService);
    return PizzasService;
})();
exports.PizzasService = PizzasService;
//# sourceMappingURL=pizzas.service.js.map