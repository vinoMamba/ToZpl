# ToZpl
A ZPL command tool implemented in TypeScript that can create graphic box, text, QR Codes, and images

> Tips: Only a few simple custom commands have been implemented so far, and the tool is currently undergoing continuous iteration.

## Install 

```bash
npm i to-zpl 

pnpm i to-zpl
```

## Usage

```typescript
import { Zpl } from 'to-zpl'

const zpl = new Zpl()
zpl
  .createGraphicBox( 50, 50,{ width: 100, height: 50, borderWidth: 2 })
  .createText(100, 100, { fontSize: [30, 30], content: 'hello zpl' })
  .createQRCode(50, 50, { scale: 10, content: 'http://test.com'})
  .createPic(50, 50, { b:8000, c: 8000, d: 80, base64: 'data:image/png;base64' })

const zplStr = zpl.getZpl()

```

The above code will generate the following zpl commands.


```zpl
^XA
^FO50,50^GB100,50,2,B,0^FS
^FO100,100
^A0N,30,30
^FDhello zpl^FS
^FO50,50
^BQ,2,10
^FDMA,http://test.com^FS
^FO50,50
^GFA,8000,80,data:image/png;base64^FS
^XZ
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [vinoMamba](https://github.com/vinoMamba)
