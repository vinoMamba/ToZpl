/*
 * format the zpl string
 * remove spaces and newline characters from the zpl string
 * */
export function formatZpl(zpl: string) {
  return zpl.replace(/[\s\n]/g, '')
}
