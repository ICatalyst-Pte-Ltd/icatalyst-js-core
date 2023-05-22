import { I18NArguments, I18NStrategy, VocabularyDefinition } from './types';
export declare class BasicI18NStrategy implements I18NStrategy {
    private selectedVocabulary;
    t(...params: I18NArguments): string;
    onInvalidTranslation(text: string, vocabulary: string | undefined): void;
    setVocabulary(name: string, vocabularyDefinition: VocabularyDefinition): void;
    loadVocabularies(): never[];
    isRTL(): boolean;
}
