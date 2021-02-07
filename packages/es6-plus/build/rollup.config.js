const path = require('path');
const { babel } = require('@rollup/plugin-babel'); // 模块是rollup.js支持babel官方编译插件模块

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
  }, 
  plugins: [
    babel({
      presets: ['@babel/preset-env']  // 官方 babel 编译解析ES6+ 语言的扩展模块
    }),
  ],
}