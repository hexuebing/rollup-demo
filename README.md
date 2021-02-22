# 目标


## rollup-start

- 只编译ES6代码
- 编译成iife格式(立即执行的函数格式)

## es6-plus

- 编译ES6+代码
- 编译成umd格式(通用模块定义)

> 运用了babel插件编译**更加高级的ES语法**。但是注意使用过程中 babel-polyfill 的引用。

## rollup-server

- 代码uglify
- 关闭sourceMap
- `npm run build` 启动执行 `生产模式`
- `npm run dev` 启动执行 `开发模式`

## rollup-node

- 利用rollup.js的API
- 在Node.js脚本中编译

## multi-in-multi-out

- 编译输入多个ES6+的js源文件 `src/index.js` 和 `src/lib/index.js`
- 编译输出多个ES5的js文件 `dist/index.js` 和 `dist/lib.js`

## rollup-node-hrm

- 用Node.js编码监听文件，并且执行Node.js调用API进行热编译。

## rollup-css

- 编译 *.css 源文件

```js
// 
...
plugins: [
  postcss({
    extract: true,
    minimize: isProductionEnv,
  }),
  babel(babelOptions),
]
...
```

## rollup-scss

- 编译 scss 文件

```js
const processSass = function(context, payload) {
  return new Promise(( resolve, reject ) => {
    sass.render({
      file: context
    }, function(err, result) {
      if( !err ) {
        resolve(result);
      } else {
        reject(err)
      }
    });
  })
}

// process
plugins: [
  postcss({
    extract: true,
    minimize: isProductionEnv,
    extensions:['css', 'scss'],
    process: processSass,
  }),
  babel(babelOptions),
],
```

## rollup-less

- 编译 less 文件

## rollup-vue

- 未完成