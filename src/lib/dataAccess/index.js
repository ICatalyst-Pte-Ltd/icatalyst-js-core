"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableData = exports.handleAxiosApi = exports.DataApi = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./DataRepository"), exports);
var DataApi_1 = require("./DataApi");
Object.defineProperty(exports, "DataApi", { enumerable: true, get: function () { return tslib_1.__importDefault(DataApi_1).default; } });
tslib_1.__exportStar(require("./DataApi"), exports);
var handleAxiosApi_1 = require("./handleAxiosApi");
Object.defineProperty(exports, "handleAxiosApi", { enumerable: true, get: function () { return tslib_1.__importDefault(handleAxiosApi_1).default; } });
tslib_1.__exportStar(require("./handleAxiosError"), exports);
var ObservableData_1 = require("./ObservableData");
Object.defineProperty(exports, "ObservableData", { enumerable: true, get: function () { return ObservableData_1.ObservableData; } });
tslib_1.__exportStar(require("./ObservableData"), exports);
//# sourceMappingURL=index.js.map