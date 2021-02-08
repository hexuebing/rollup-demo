const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const plugins = [
  babel({
    "presets": ['@babel/preset-env']
  }),
]

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name: 'Demo',
    }, 
    external: ['lib/demo1', 'lib/demo2'],
    plugins,
  },

  {
    input: resolveFile('src/lib/demo1.js'),
    output: {
      file: resolveFile('dist/lib/demo1.js'),
      format: 'umd',
      name: 'demo1',
    }, 
    plugins,
  },

  {
    input: resolveFile('src/lib/demo2.js'),
    output: {
      file: resolveFile('dist/lib/demo2.js'),
      format: 'umd',
      name: 'demo2',
    }, 
    plugins,
  },
]