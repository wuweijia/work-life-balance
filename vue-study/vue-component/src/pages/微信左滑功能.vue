<style>
  /* 列表仅水平滚动 */
  .list { display: flex; overflow-y: hidden; scroll-snap-type: x mandatory;}
  /* 主内容宽度100%，白色背景覆盖 */
  .content { flex: 0 0 100vw; background-color: #fff; position: relative; scroll-snap-align: start; }
  /* 空标签元素，作用是腾出水平滚动空间 */
  .space { flex: 0 0 4rem; scroll-snap-align: end;}
  /* 按钮绝对定位，藏在内容白色背景后面 */
  .button { width: 4rem;  position: absolute; right: 0; }
</style>

<template>
  <main>
    <div class="list">
      <button class="button" data-type="danger">删除</button>
      <a href="javascript:" class="content">我是列表，试试左滑我</a>
      <s class="space"></s>
    </div>
  </main>
</template>
