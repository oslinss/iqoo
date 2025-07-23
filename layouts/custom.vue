<template>
  <div class="main">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: url("https://ai-static.vivo.com.cn/static-ai/common/pc_bg.21ad5da57912f6cad9981a99878bc109.png");
}
.content {
  position: relative;
  top: 20%;
  left: 25%;
  width: 50%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
</style>
