"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./main"));
const routes = express_1.default.Router();
routes.get('/', ((req, res) => {
    res.send("API Run");
}));
routes.use('/main', main_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map