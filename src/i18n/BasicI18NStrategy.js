"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicI18NStrategy = void 0;
const formatters_1 = require("../formatters");
const languages_1 = require("./languages");
class BasicI18NStrategy {
    constructor() {
        this.selectedVocabulary = null;
    }
    t(...params) {
        var _a;
        const [text, ...rest] = params;
        if (!text) {
            return text;
        }
        const translatedText = this.selectedVocabulary
            ? this.selectedVocabulary.values[text.toLocaleLowerCase()]
            : undefined;
        if (!translatedText) {
            this.onInvalidTranslation(text, (_a = this.selectedVocabulary) === null || _a === void 0 ? void 0 : _a.name);
        }
        return (0, formatters_1.formatString)(translatedText || text, ...rest);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onInvalidTranslation(text, vocabulary) {
        // Do nothing by default
    }
    setVocabulary(name, vocabularyDefinition) {
        // Do nothing
    }
    loadVocabularies() {
        return [];
    }
    isRTL() {
        if (this.selectedVocabulary) {
            return (0, languages_1.isRTL)(this.selectedVocabulary.language);
        }
        else {
            return false;
        }
    }
}
exports.BasicI18NStrategy = BasicI18NStrategy;
//# sourceMappingURL=BasicI18NStrategy.js.map