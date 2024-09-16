import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  outfile: './dist/index.mjs',
  platform: 'node',
  target: 'es2020',
  format: 'esm'
})
