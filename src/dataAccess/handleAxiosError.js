"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAxiosError = void 0;
const axios_1 = require("axios");
function handleAxiosError(error) {
    var _a, _b;
    let errorMessage = '';
    if (axios_1.default.isAxiosError(error)) {
        if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) {
            const data = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data;
            if (data.errors && data.errors.length > 0) {
                return [data.errors];
            }
            else if (data.error_description) {
                return [[data.error_description]];
            }
            else if (data.message) {
                return [[data.message]];
            }
            else if (Array.isArray(data) && data.length > 0) {
                return data.map((e) => [e.message]);
            }
        }
        else if (error.response && error.response.statusText) {
            errorMessage = error.response.statusText;
        }
    }
    if (!errorMessage) {
        errorMessage = error.message || 'An unknown error has occurred';
    }
    return [[errorMessage]];
}
exports.handleAxiosError = handleAxiosError;
//# sourceMappingURL=handleAxiosError.js.map