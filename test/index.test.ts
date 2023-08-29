import { describe, expect, it } from 'vitest'
import { Zpl, formatZpl } from '../src/index'

describe('utils', () => {
  it('utils.formatZpl: remove spaces', () => {
    expect(formatZpl('hello    zpl')).toEqual('hellozpl')
  })

  it('utils.formatZpl: remove newline characters', () => {
    expect(formatZpl('hello\nzpl')).toEqual('hellozpl')
  })

  it('utils.formatZpl: remove newline characters and spaces', () => {
    expect(formatZpl('hello\nz p l')).toEqual('hellozpl')
  })

  it('utils.formatZpl: remove newline characters and spaces,except betwwen ^FD and ^FS', () => {
    expect(formatZpl('^FDhello\n vino^FS')).toEqual('^FDhello vino^FS')
  })
})

describe('ZPL', () => {
  it('The ZPL Command have a start tag an a end tag', () => {
    const zpl = new Zpl()
    expect(zpl.getZpl()).toEqual('^XA^XZ')
  })

  it('create a graphic box', () => {
    const zpl = new Zpl()
    zpl.createGraphicBox(
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

  it('create a paragraph', () => {
    const zpl = new Zpl()
    zpl.createText(100, 100, {
      fontSize: [30, 30],
      content: 'hello zpl',
    })
    expect(zpl.getZpl()).toEqual(formatZpl(`
        ^XA
        ^FO100,100
        ^A0N,30,30
        ^FDhello zpl^FS
        ^XZ
    `))
  })

  it('create a QR Code', () => {
    const zpl = new Zpl()
    zpl.createQRCode(50, 50, {
      scale: 10,
      content: 'http://test.com',
    })
    expect(zpl.getZpl()).toEqual(formatZpl(`
        ^XA
        ^FO50,50
        ^BQ,2,10
        ^FDMA,http://test.com^FS
        ^XZ
    `))
  })

  it('create a Pic', () => {
    const zpl = new Zpl()
    zpl.createPic(50, 50, {
      b: 8000,
      c: 8000,
      d: 80,
      base64: 'data:image/png;base64',
    })
    expect(zpl.getZpl()).toEqual(formatZpl(`
        ^XA
        ^FO50,50
        ^GFA,8000,8000,80,data:image/png;base64^FS
        ^XZ
    `))
  })

  it('create a Pic 2', () => {
    const zpl = new Zpl()
    zpl.createPic(50, 50, {
      c: 8000,
      d: 80,
      base64: 'data:image/png;base64',
    })
    expect(zpl.getZpl()).toEqual(formatZpl(`
        ^XA
        ^FO50,50
        ^GFA,8000,80,data:image/png;base64^FS
        ^XZ
    `))
  })
})
