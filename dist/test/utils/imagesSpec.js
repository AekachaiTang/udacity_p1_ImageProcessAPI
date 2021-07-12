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
const images_1 = __importDefault(require("../../utils/images"));
describe('Tests for images function', () => {
    it('expects imageProcess("img4", 200, 200) to be resolved', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(images_1.default('img4', 200, 200)).toBeResolved();
    }));
    it('expects images("img4", 200, 200) to be rejected', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(images_1.default('imgg4', 200, 200)).toBeRejected();
    }));
});
//# sourceMappingURL=imagesSpec.js.map