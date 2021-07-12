"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = express_1.default();
const port = 3000;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', logger_1.default, index_1.default);
app.listen(port, () => {
    console.log(`server started on Port : ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map