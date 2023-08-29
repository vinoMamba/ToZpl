export interface GraphicBoxOptions {
  width: number
  height: number
  borderWidth?: number
}

export interface TextOptions {
  fontSize: [number, number]
  content: string
}

export interface QRCodeOptions {
  scale: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  content: string
}
