/*
 * format the zpl string
 * remove spaces and newline characters from the zpl string
 * */
export function formatZpl(zpl: string) {
  // remove newline characters
  const cleanedStr = zpl.replace(/\n/g, '')
  const reg = /\^FD(.*?)\^FS/g
  const matches = cleanedStr.match(reg) || []
  // remove spaces
  const cleanedZpl = cleanedStr.replace(/\s/g, '')
  // expect between FD and FS
  const formatedZpl = cleanedZpl.replace(reg, () => matches.shift() as string)
  return formatedZpl
}
