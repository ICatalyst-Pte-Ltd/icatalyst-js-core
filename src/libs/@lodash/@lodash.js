"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __ = tslib_1.__importStar(require("lodash"));
const _ = __.runInContext();
_.mixin({
    // Immutable set for setting state
    setIn: (state, name, value) => {
        return _.setWith(_.clone(state), name, value, _.clone);
    },
});
exports.default = _;
//# sourceMappingURL=@lodash.js.map