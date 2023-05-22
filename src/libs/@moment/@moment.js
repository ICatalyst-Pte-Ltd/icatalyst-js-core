"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const i18n_1 = require("../../lib/i18n");
if (moment_1.default.locale) {
    moment_1.default.locale((0, i18n_1.getPreferredLanguage)());
}
exports.default = moment_1.default;
//# sourceMappingURL=@moment.js.map