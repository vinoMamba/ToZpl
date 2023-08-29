import { ZplEnum } from './Command'
import type { GraphicBoxOptions, TextOptions } from './type'
import { formatZpl } from './utils'

export class Zpl {
  private zplList: Array<string>
  constructor() {
    this.zplList = []
  }

  private createPostion(top: number, left: number) {
    return `${ZplEnum.FIELD_ORIGIN}${top},${left}`
  }

  private createFont(fontSize: [number, number]) {
    return `${ZplEnum.FONT},${fontSize[0]},${fontSize[1]}`
  }

  /* create a graphic box */
  createGraphicBox(top: number, left: number, opt: GraphicBoxOptions) {
    const { width, height, borderWidth = 1 } = opt
    const gbItem = `
      ${this.createPostion(top, left)}
      ${ZplEnum.GRAPHIC_BOX}${width},${height},${borderWidth},B,0${ZplEnum.SEPARATOR}`
    this.zplList.push(gbItem)
  }

  /* create a text */
  createText(top: number, left: number, opt: TextOptions) {
    const { fontSize, content } = opt
    const textItem = `
      ${this.createPostion(top, left)}
      ${this.createFont(fontSize)}
      ${ZplEnum.TEXT}${content}${ZplEnum.SEPARATOR}
    `
    this.zplList.push(textItem)
  }

  getZpl() {
    const resultList = [
      ZplEnum.START,
      ...this.zplList,
      ZplEnum.END,
    ]
    const zplStr = resultList.join('')
    return formatZpl(zplStr)
  }
}
