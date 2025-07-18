<template>
    <div class="aside">
        <div class="check">
        <a class="el-icon">
            <ChatLineSquare />
        </a>
    </div>
    <div class="top" :class="{ 'top-scrolled': isScrolled }">
        <a href="#top" class="el-icon">
            <ArrowUp />
        </a>
    </div>
    </div>
    
</template>

<script setup>
import { ArrowUp, ChatLineSquare } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";

const isScrolled = ref(false);

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
    z-index: 2000;
    position: fixed;
}
.check {
    width: 70px;
    height: 50px;
    position: fixed;
    background-color: rgb(247, 179, 6);
    bottom: 180px;
    right: 50px;
    border-radius: 20px;
}
.top {
    width: 70px;
    height: 50px;
    position: fixed;
    background-color: rgba(109, 102, 102, 0.247);
    bottom: 120px;
    right: 50px;
    border-radius: 20px;
}
.top:hover {
    background-color: rgba(109, 102, 102, 0.71);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.check:hover {
    background-color: rgba(247, 179, 6, 0.489);
    box-shadow: 0 0 10px rgba(242, 239, 239, 0.1);
}
.el-icon {
    color: white;
    font-size: 30px;
    padding:10px 20px;
}
.top-scrolled {
    display: none;
}
</style>
