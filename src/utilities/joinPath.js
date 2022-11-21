"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _lodash_1 = require("../libs/@lodash");
function joinPath(a = '', b = '') {
    return _lodash_1.default.trimEnd(a, '/') + '/' + _lodash_1.default.trimStart(b, '/');
}
exports.default = joinPath;
//# sourceMappingURL=joinPath.js.map