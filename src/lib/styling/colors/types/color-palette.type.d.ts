import { ColorSwatch } from './color-swatch.type';
interface BaseDeclaration {
    primary: ColorSwatch;
    secondary: ColorSwatch;
    warning?: ColorSwatch;
    error?: ColorSwatch;
    success?: ColorSwatch;
    info?: ColorSwatch;
    background?: {
        default?: string;
        paper?: string;
    };
}
interface ExtendedDeclaration {
    primary: ColorSwatch;
    secondary: ColorSwatch;
    [key: string]: ColorSwatch | undefined;
}
export type ColorPalette = BaseDeclaration | ExtendedDeclaration;
export {};
