const path = require('path');
const chokidar = require('chokidar');
const Koa = require('koa');
const KoaStatic = require('koa-static');
const compileTask = require('./compile_task');
const configList = require('./rollup.config.dev');

const app = new Koa()

const projectPath = path.join(__dirname, '..')
const srcPath = path.join(projectPath, 'src')

function watchSrc(){
  chokidar.watch(srcPath, {
    ignored: /(^|[\/\\])\../
  }).on('all', (eventName) => {
    if(eventName === 'change'){
      compileTask(configList)
    }
  })
}

app.use(KoaStatic(projectPath))

app.listen(3001, function(){
  console.log('[example] http://127.0.0.1:3001/example/index.html')
  compileTask(configList)
  watchSrc()
})