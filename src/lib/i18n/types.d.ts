import { Primitive } from '../types';
import { ISOLanguageKey } from './languages';
export type VocabularyDefinition = {
    name: string;
    language: ISOLanguageKey | string;
    values: {
        [key: string]: string;
    };
};
export type Vocabulary = {
    name: string;
    nativeName: string;
};
export type I18NArguments = [
    text: string,
    ...params: (Primitive | undefined)[]
];
export type I18NStrategy = {
    /**
     * The translation function
     */
    t: (...params: I18NArguments) => string;
    setVocabulary: (name: string, vocabularyDefinition: VocabularyDefinition) => void;
    isRTL: () => boolean;
    onInvalidTranslation: (text: string, vocabulary: string) => void;
    loadVocabularies: () => Vocabulary[];
};
