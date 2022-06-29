declare module 'colorthief' {
  type Color = [number, number, number]
  export default class Colorthief {
    static getColor: (str: string, quality: number) => Promise<Color>
    static getPalette: (img: HTMLImageElement | null) => Promise<Color>[]
  }
}
