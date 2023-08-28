import { describe, expect, it } from 'vitest'
import { Zpl, formatZpl } from '../src/index'

describe('ZPL', () => {
  it('The ZPL Command have a start tag an a end tag', () => {
    const zpl = new Zpl()
    expect(zpl.getZpl()).toEqual('^XA^XZ')
  })
  it('Create a graphic box', () => {
    const zpl = new Zpl()
    zpl.gb(
      50,
      50,
      {
        width: 100,
        height: 50,
        borderWidth: 2,
      })
    expect(zpl.getZpl()).toEqual(formatZpl(`
        ^XA
        ^FO50,50^GB100,50,2,B,0^FS
        ^XZ
    `))
  })
})
