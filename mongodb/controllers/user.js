'use strict';
const UserModel = require('../models/crud')

// 查找
exports.users = async function(ctx) {
  ctx.status = 200;
  ctx.body = {
    code: 0,
    data: await UserModel.find()
  }
}

// 修改
exports.editUser = async (ctx) => {
  const { name } = ctx.request.query
  var query = { name };
  try {
    const data = await UserModel.findOneAndUpdate(query, { name: 'jason' })
  } catch (error) {
    console.log(error);
  }

}

// 删除
exports.delUser = async (ctx) => {
  const { name } = ctx.request.query
  var query = { name };
  try {
    const data = await UserModel.deleteOne(query)
    console.log(data);
  } catch (error) {
    console.log(error);
  }

}
