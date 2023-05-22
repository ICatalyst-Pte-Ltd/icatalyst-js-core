import { ColorInput } from '../../../../libs/@tinycolor/@tinycolor';
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
export type PaletteDeclaration = BaseDeclaration | ExtendedDeclaration;
export type ThemeDeclaration = {
    name: string;
    mode?: 'light' | 'dark';
    palette: PaletteDeclaration;
    breakpoints?: any;
    direction?: 'ltr' | 'rtl';
    components?: any;
    shape?: any;
    mixins?: any;
    shadows?: any;
    typography?: any;
    transitions?: any;
    zIndex?: any;
};
export {};
