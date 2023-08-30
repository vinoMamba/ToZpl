export enum ZplEnum {
  /* Start flag */
  START = '^XA',
  /* End flag */
  END = '^XZ',
  /* Separator */
  SEPARATOR = '^FS',
  /* Field Origin */
  FIELD_ORIGIN = '^FO',
  /* Graphic Box  */
  GRAPHIC_BOX = '^GB',
  /*
   * TODO: Achieve other font types
   * */
  FONT = '^A0N',
  /* Text Content */
  TEXT = '^FD',
  /* QR Code */
  QR_CODE = '^BQ',
  /* picture */
  PICTURE = '^GF',
}
