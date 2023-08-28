import { describe, expect, it } from 'vitest'
import { Zpl } from '../dist'

describe('should', () => {
  const zpl = new Zpl()
  it('exported', () => {
    expect(zpl.getZpl()).toEqual("test")
  })
})
