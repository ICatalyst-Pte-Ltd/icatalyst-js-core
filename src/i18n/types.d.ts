import { Primitive } from '../types';
import { ISOLanguageKey } from './languages';
export declare type VocabularyDefinition = {
    name: string;
    language: ISOLanguageKey;
    values: {
        [key: string]: string;
    };
};
export declare type Vocabulary = {
    name: string;
    nativeName: string;
};
export declare type I18NArguments = [text: string, ...params: (Primitive | undefined)[]];
export declare type I18NStrategy = {
    /**
     * The translation function
     */
    t: (...params: I18NArguments) => string;
    setVocabulary: (name: string, vocabularyDefinition: VocabularyDefinition) => void;
    isRTL: () => boolean;
    onInvalidTranslation: (text: string, vocabulary: string) => void;
    loadVocabularies: () => Vocabulary[];
};
