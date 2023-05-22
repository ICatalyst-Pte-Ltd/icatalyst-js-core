import { HSL, HSLA, HSV, HSVA, RGB, RGBA, TinyColor } from '@ctrl/tinycolor';
export type ColorInput = string | number | RGB | RGBA | HSL | HSLA | HSV | HSVA | TinyColor;
export { tinycolor, readability, mostReadable, random as randomColor, } from './@tinycolor';
export { tinycolor as default } from './@tinycolor';
