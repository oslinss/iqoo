<template>
  <div class="aside">
    <nuxt-link to="/survey">
      <div class="check">
        <a class="el-icon">
          <Edit />
        </a>
        <div class="tip">
          <div class="feedback">
            NPS调研，您可以直接反馈产品使用体验及品牌推荐意愿
          </div>
        </div>
      </div>
    </nuxt-link>
    <div class="top" :class="{ 'top-scrolled': isScrolled }">
      <a href="#top" class="el-icon">
        <ArrowUp />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ArrowUp,Edit} from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";

const isScrolled = ref(false);
const showTip = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY < 50;
  };

  window.addEventListener("scroll", handleScroll);

  // 组件卸载时移除事件监听
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});
</script>

<style scoped>
.aside {
  z-index: 1002;
  position: fixed;
}
.check,
.top {
  width: 48px;
  height: 48px;
  position: fixed;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 8px;
  right: 50px;
  border-radius: 24px;
}
.check {
    bottom: 160px;
}
.top {
    bottom: 100px;
}
.top:hover {
  background-color: rgba(255, 255, 255, 0.711);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 8px;
}
.check:hover {
  background-color: rgba(255, 255, 255, 0.711);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 8px;
}
.el-icon {
  color: rgb(0, 0, 0);
  font-size: 26px;
  padding:11px;
}

.top-scrolled {
  display: none;
}

.tip {
    display:none;
}

.check:hover .tip {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -60%;
  right: 130%;
  width: 290px;
  height: auto;
  color: rgb(0, 0, 0);
  background-color: rgb(247, 245, 245);
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.feedback {
  font-weight: bold;
  padding-bottom: 15px;
}

</style>
