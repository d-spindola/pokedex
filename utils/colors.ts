import { Color } from 'colorthief'
import { RGBToHSL } from './rgbToHsl'

export const arrayToRgb = ([r, g, b]: Color): string => `rgb(${r}, ${g}, ${b})`

export const arrayRgbToHsl = (color: Color, lightness?: number): string => {
  const [h, s, l] = RGBToHSL(color).map((v) => Math.round(v))

  console.log(h, s, l)

  return `hsl(${h}, ${s}%, ${lightness ? lightness : l}%)`
}
