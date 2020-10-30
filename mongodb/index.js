// 1 创建一个最简单的应用
const Koa = require('koa');
const app = new Koa();
const MongoClient = require('mongoose')
const Router = require('koa-router')
const userController = require('./controllers/user');
const UserModal = require('./models/crud')

let router = new Router()

// 2创建数据库 链接
dburl = 'mongodb://localhost/koa-test'
MongoClient.connect(dburl, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('connected to ' + dburl);
  }
})

app.use(router.routes())

app.use(async ctx => {
  ctx.body = 'Hello World';
});

// 鉴于我们不做页面就都用get请求模拟 增删改查

router.get('/created', async (ctx) => {
  user = new UserModal({
    name: 'jony',
    age: 30,
  })
  user.save(function (err, data) {
    console.log('1');

    if (err) {
      console.log(err);
    }
    console.log(data);
  })
})

router.get('/users', userController.users)
router.get('/editUser', userController.editUser)
router.get('/delUser', userController.delUser)



app.listen(3000, () => {
  console.log('starting at port 3000')
})

// 在控制台 执行 node index.js
// 访问 http://127.0.0.1:3000
