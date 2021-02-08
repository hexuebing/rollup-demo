const path = require('path')
const rollup = require('rollup')
const chalk = require('chalk')  // 日志详情
const compose = require('koa-compose')
const { nextTick } = require('process')

function logger( text = '', opts = { status : 'INFO' } ) {
  let logText = '';
  switch( opts.status)  {
    case 'SUCCESS': 
      logText = `${chalk.bgGreen('[SUCCESS]')} ${chalk.green(text)}`
      break;
    case 'WARN': 
      logText = `${chalk.bgYellow('[WARN]')} ${chalk.yellow(text)}`
      break;
    case 'ERROR': 
      logText = `${chalk.bgRed('[ERROR]')} ${chalk.red(text)}`
      break;
    default:
      logText = `${chalk.bgWhite('[INFO]')} ${chalk.white(text)}`
      break;
  }
  console.log(logText);
}

// 包装成中间件
function wrapTask(config){
  const inputOptions = config
  const outputOptions = config.output
  return async function(ctx, next){
    const bundle = await rollup.rollup(inputOptions)
    logger(`开始编译 ${path.basename(inputOptions.input) }`)

    await bundle.generate(outputOptions)
    await bundle.write(outputOptions);
    logger(`编译结束 ${path.basename(outputOptions.file)}`)

    await next()
  }
}

function compileTask(configList){
  const taskList = []
  configList.map((config) => {
    taskList.push(wrapTask(config))
  })
  compose(taskList)().then(function () {
    logger('END', { status: 'SUCCESS'})
  }).catch(function (err) {
    console.log(err);
  })
}

module.exports = compileTask