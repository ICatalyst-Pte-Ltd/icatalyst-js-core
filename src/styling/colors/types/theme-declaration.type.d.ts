import { ColorInput } from '../../../libs/@tinycolor/@tinycolor';
interface BaseDeclaration {
    primary: ColorInput;
    secondary: ColorInput;
    tint?: number;
    warning?: ColorInput;
    error?: ColorInput;
    success?: ColorInput;
    info?: ColorInput;
    background?: {
        default?: ColorInput;
        paper?: ColorInput;
    };
}
interface ExtendedDeclaration {
    [key: string]: ColorInput;
}
export declare type PaletteDeclaration = BaseDeclaration | ExtendedDeclaration;
export declare type ThemeDeclaration = {
    name: string;
    mode?: 'light' | 'dark';
    palette: PaletteDeclaration;
};
export {};
