declare module 'colorthief' {
  type Color = [number, number, number]
  export default class Colorthief {
    static getColor: (str: string, quality: number) => Color
    static getPalette: (img: HTMLImageElement | null) => Color[]
  }
}
