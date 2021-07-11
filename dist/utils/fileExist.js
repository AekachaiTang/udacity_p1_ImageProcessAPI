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
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const fileExist = (Path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield promises_1.access(Path, fs_1.constants.R_OK | fs_1.constants.W_OK);
        console.log('OK');
        return true;
    }
    catch (e) {
        return false;
    }
});
exports.default = fileExist;
//# sourceMappingURL=fileExist.js.map