<template>
  <div class="header">
    <div id="navbar" class="nav" :class="{ 'nav-scrolled': isScrolled }">
      <a class="nav-logo" href="https://www.iqoo.com/cn">iQOO</a>
      <div class="nav-link">
        <a class="nav-home">首页</a>
        <nuxt-link to="/product" class="nav-product">产品</nuxt-link>
        <a href="https://shop.vivo.com.cn/product/list-527" class="nav-shop">商城</a>
        <a href="https://www.vivo.com.cn/originos" class="nav-origin">OriginOS</a>
        <a href="https://www.vivo.com.cn/service.html" class="nav-service">服务</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const isScrolled = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 150;
  };

  window.addEventListener("scroll", handleScroll);
  
  // 组件卸载时移除事件监听
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

</script>

<style scoped>
.header {
  width: 100%;
}

.nav {
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  line-height: 80px;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 100;
}

.nav-scrolled {
  color: #000;
  background: rgba(254, 254, 255);
}

.nav-logo {
  position: absolute;
  left: 8rem;
  color: inherit;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  font-family: "languageFont","AvenirNext","Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu,sans-serif,"WebRupee";
}

.nav-link {
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: auto;
}

.nav-link a {
  color: inherit;
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

/* 分辨率提高时逐步隐藏导航链接 */
@media (max-width: 1500px) {
  .nav-service { display: none}
}
@media (max-width: 1400px) {
  .nav-origin { display: none}
}
@media (max-width: 1300px) {
  .nav-shop { display: none}
}
@media (max-width: 1200px) {
  .nav-product { display: none}
}
@media (max-width: 1000px) {
  .nav-home { display: none}
  .nav-logo {
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
  }
}  
</style>
