import { Controller } from 'egg';
import ms = require('ms');
export default class HomeController extends Controller {
  public async index() {
    const ctx = this.ctx;
    ctx.session.user = 'wuweijia';
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    ctx.session.maxAge = ms('30d');
    ctx.body = 'hi, egg';
  }
  public async user() {
    const ctx = this.ctx;
    ctx.body = ctx.session.user;
  }
}
