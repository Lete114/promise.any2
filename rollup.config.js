import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import { babel } from '@rollup/plugin-babel'
import { main, module, jsdelivr } from './package.json'

const production = !process.env.ROLLUP_WATCH

const plugins = [
  production && del({ targets: 'dist/*' }),
  babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] })
]

export default {
  input: 'index.js',
  plugins,
  output: [
    {
      format: 'iife',
      file: jsdelivr,
      plugins: [production && terser()]
    },
    {
      format: 'esm',
      file: module
    },
    {
      exports: 'auto',
      format: 'cjs',
      file: main
    }
  ],
  watch: {
    clearScreen: false
  }
}
