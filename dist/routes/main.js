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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const images_1 = __importDefault(require("../utils/images"));
const fileExist_1 = __importDefault(require("../utils/fileExist"));
const main = express_1.default.Router();
main.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = req.query.filename;
    const outputFile = `${config_1.default.DIR_PATH}/thumb/${req.query.filename}${req.query.width}X${req.query.height}.jpg`;
    let welcomeMsg = "no Msg";
    const width = parseInt(req.query.width) || null;
    const height = parseInt(req.query.height) || null;
    const imagePath = `${config_1.default.DIR_PATH}/photo/${fileName}.jpg`;
    try {
        const exist = yield fileExist_1.default(imagePath);
        const outPutFileExist = yield fileExist_1.default(outputFile);
        if (!exist) {
            res.send('Invalid file name, not found. Please enter a valid file name. Such as: http://localhost:3000/main?filename=img&width=200&height=200');
        }
        else if (!width || !height) {
            res.send('Please enter valid numbers for width and height. Such as: http://localhost:3000/main?filename=img&width=200&height=200');
        }
        else if (width < 0 || height < 0) {
            res.send('Please enter numbers for both width and height that are above 0');
        }
        else if (!outPutFileExist) {
            yield images_1.default(fileName, width, height);
            res.status(200).sendFile(outputFile);
        }
        else {
            res.status(200).sendFile(outputFile);
        }
    }
    catch (e) {
        console.error('error in getting images path', e);
    }
}));
exports.default = main;
//# sourceMappingURL=main.js.map