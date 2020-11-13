const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(path.join(__dirname, './index.tmp.html'), 'utf-8')
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html) // html 将是注入应用程序内容的完整页面
  })
})

server.listen(8080, () => {
  console.log('listen 8080');
})
