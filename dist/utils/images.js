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
const sharp_1 = __importDefault(require("sharp"));
const config_1 = __importDefault(require("../config"));
const images = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = `${config_1.default.DIR_PATH}/photo/${filename}.jpg`;
    const outPath = `${config_1.default.DIR_PATH}/thumb/${filename}${width}x${height}.jpg`;
    try {
        yield sharp_1.default(imagePath).rotate().resize({ width, height, fit: 'contain' }).toFile(outPath);
    }
    catch (e) {
        console.error('Error on Images Util', e);
        throw e;
    }
});
exports.default = images;
//# sourceMappingURL=images.js.map