## 使用 koa + mongoose 操作数据库

## 想要链接数据库需要先启动数据库服务，可以通过docker 启动 MongoDB 或者 安装客户端启动

`docker run -p 27017:27017 -d mongo`

## 安装
`npm i`

#### 增加
```http://127.0.0.1:3000/created```

#### 修改
```http://127.0.0.1:3000/editUser?name="jony"```

#### 删除
```http://127.0.0.1:3000/delUser?name="jony"```

#### 查询
```http://127.0.0.1:3000/users```
