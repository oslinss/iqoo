<template>
  <div class="main">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://ai-static.vivo.com.cn/static-ai/common/pc_bg.21ad5da57912f6cad9981a99878bc109.png")
    no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  position: relative;
  width: 50vw;
  min-width: 320px;
  max-width: 750px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
