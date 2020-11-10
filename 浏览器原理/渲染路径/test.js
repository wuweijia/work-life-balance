const a = ['isMobile', 'isWechat', 'ispc']
const type = {
  isWechat: true
}

a.forEach(element => {
  if (type[element]) {
   return
  }
});
