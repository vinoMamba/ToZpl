import { ZplEnum } from './Command'
import type { GbOptions } from './type'
import { formatZpl } from './utils'

export { formatZpl } from './utils'

export class Zpl {
  private value: string
  private zplList: Array<string>
  constructor() {
    this.value = ''
    this.zplList = []
  }

  gb(top: number, left: number, opt: GbOptions) {
    const { width, height, borderWidth = 1 } = opt
    const gbItem = `
      ${ZplEnum.FIELD_ORIGIN}${top},${left}
      ${ZplEnum.GRAPHIC_BOX}${width},${height},${borderWidth},B,0${ZplEnum.SEPARATOR}`
    this.zplList.push(gbItem)
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
