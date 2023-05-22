"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function handleAxiosApi(axiosPromises) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        axiosPromises = Array.isArray(axiosPromises)
            ? axiosPromises
            : [axiosPromises];
        if (axiosPromises.length === 1) {
            const { data } = yield axiosPromises[0];
            return data;
        }
        return Promise.all(axiosPromises.map((promise) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { data } = yield promise;
            return data;
        })));
    });
}
exports.default = handleAxiosApi;
//# sourceMappingURL=handleAxiosApi.js.map