<template>
  <div>
    <div id="navbar" class="nav">
      <a class="nav-logo" href="https://www.iqoo.com/cn">IQOO</a>
      <div class="nav-link">
        <NuxtLink to="/">首页</NuxtLink>
        <a href="https://www.vivo.com.cn/products-iqoo.html">产品</a>
        <a href="https://shop.vivo.com.cn/product/list-527">商城</a>
        <a href="https://www.vivo.com.cn/originos">OriginOS</a>
        <a href="https://www.vivo.com.cn/service.html">服务</a>
        <el-icon><CirclePlus /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // 白色背景 + 黑色文字
      navbar.style.backgroundColor = "white";
      navbar.style.color = "#000000"; // 主要文字颜色
      const links = navbar.querySelectorAll("a");
      links.forEach((link) => {
        link.style.color = "#000000"; // 链接文字也改为黑色
      });
    } else {
      // 恢复初始样式
      navbar.style.backgroundColor = "#061b41";
      navbar.style.color = "white";
      const links = navbar.querySelectorAll("a");
      links.forEach((link) => {
        link.style.color = "white"; // 链接文字恢复白色
      });
    }
  });
});
</script>

<style scoped>
.nav {
  display: flex;
  position: fixed;
  width: 93%;
  flex-direction: row;
  color: white;
  background-color: #061b41;
  text-decoration: none;
  top: 0;
  line-height: 70px;
  padding-left: 91px;
  z-index: 1;
  white-space: nowrap;
}
.nav-logo {
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-right: 400px;
  text-decoration: none;
  font-family: "languageFont","AvenirNext","Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu,sans-serif,"WebRupee";
}
.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
}
.nav-link a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.nav a {
  font-family: "languageFont", "AvenirNext", "Microsoft YaHei", 微软雅黑,
    "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu, sans-serif, "WebRupee";
}

.nav a:hover {
  color: #f0b31c !important;
}

.CirclePlus {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}
</style>
