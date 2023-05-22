"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _lodash_1 = tslib_1.__importDefault(require("../../libs/@lodash"));
function joinPath(a = '', b = '') {
    return _lodash_1.default.trimEnd(a, '/') + '/' + _lodash_1.default.trimStart(b, '/');
}
exports.default = joinPath;
//# sourceMappingURL=joinPath.js.map