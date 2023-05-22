import { PaletteDeclaration } from './types';
import { ColorPalette } from './types/color-palette.type';
export declare function createColorPalette({ primary, secondary, warning, error, success, info, tint, background, ...rest }: PaletteDeclaration & {
    tint?: number;
}): ColorPalette;
