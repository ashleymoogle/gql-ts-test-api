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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const Type_1 = __importDefault(require("../schemas/Type"));
let default_1 = class default_1 {
    getTypes() {
        return data_1.types;
    }
    getTypeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield node_fetch_1.default(`https://pokeapi.co/api/v2/type/${id}`).then(d => d.json());
            return {
                id: type.id,
                name: type.name,
                pokemon: type.pokemon.reduce((acc, item) => {
                    acc.push(Object.assign({ id: parseInt(item.pokemon.url.split('/')[item.pokemon.url.split('/').length - 2]) }, item.pokemon));
                    return acc;
                }, [])
            };
        });
    }
    getTypeByName(name) {
        return data_1.types.find(type => type.name === name);
    }
};
__decorate([
    type_graphql_1.Query(returns => [Type_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "getTypes", null);
__decorate([
    type_graphql_1.Query(returns => Type_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "getTypeById", null);
__decorate([
    type_graphql_1.Query(returns => Type_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getTypeByName", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Type_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=TypesResolver.js.map