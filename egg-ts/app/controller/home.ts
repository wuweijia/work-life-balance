import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async index() {
    const ctx = this.ctx;
    ctx.body = 'hi, egg';
  }
}
