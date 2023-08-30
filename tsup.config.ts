import { defineConfig } from 'tsup'

export default defineConfig({
  external: [],
  entry: [
    'src/index.ts',
  ],
  outDir: 'dist',
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
})
