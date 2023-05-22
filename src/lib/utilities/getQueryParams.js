"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQueryParams(url) {
    var _a;
    return (_a = url
        .split('?')
        .pop()) === null || _a === void 0 ? void 0 : _a.split('&').map((param) => {
        const [key, val] = param.split('=');
        return [key, decodeURIComponent(val || '')];
    }).reduce((result, [key, val]) => {
        result[key] = val;
        return result;
    }, {});
}
exports.default = getQueryParams;
//# sourceMappingURL=getQueryParams.js.map