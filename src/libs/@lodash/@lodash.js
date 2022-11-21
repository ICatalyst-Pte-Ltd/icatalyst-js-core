"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __ = require("lodash");
const _ = __.runInContext();
_.mixin({
    // Immutable set for setting state
    setIn: (state, name, value) => {
        return _.setWith(_.clone(state), name, value, _.clone);
    },
});
exports.default = _;
//# sourceMappingURL=@lodash.js.map