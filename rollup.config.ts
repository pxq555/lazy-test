import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const libraryName = 'lazy-pxq-test'

const banner =
  '/*!\n' +
  ` * vue3-lazy v${pkg.version}\n` +
  ` * (c) 2020-${new Date().getFullYear()} ustbhuangyi\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: `src/index.js`,
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
      sourcemap: true,
      banner
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      banner
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
