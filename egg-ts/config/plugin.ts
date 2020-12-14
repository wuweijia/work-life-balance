import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  viewStatic: {
    enable: true,
    package: 'egg-view-static',
  },
};

export default plugin;
