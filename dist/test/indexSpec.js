"use strict";
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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = supertest_1.default(app_1.default);
describe('Test endpoint responses', () => {
    describe('Test the / endpoint', () => {
        it('gets the / endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/');
            expect(response.status).toEqual(200);
        }));
    });
    describe('Test a wrong endpoint', () => {
        it('send message to browser for endpoint "/404"', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/404');
            expect(response).withContext('Wrong route, please enter a valid route, such as: http://localhost:3000/main');
        }));
    });
});
//# sourceMappingURL=indexSpec.js.map