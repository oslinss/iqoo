<template>
    <div class="aside">
        <div class="check" @click="showTip=!showTip">
        <a class="el-icon">
            <ChatLineSquare />
        </a>
        <div class="tip" v-if="showTip">
            <div class="el-icon">
                <Close />
            </div>
            
            <div class="feedback">NPS调研，您可以直接反馈产品使用体验及品牌推荐意愿</div>

            <div>
            <a href="https://ai-h5.vivo.com.cn/special-questionnairev2/index.html?id=3125&sign=c99009cd5dd1ff78caf9fae7a101e651#/">
                <el-button type="warning">点击参与</el-button>
            </a>
                
            </div>
            
        </div>
    </div>
    <div class="top" :class="{ 'top-scrolled': isScrolled }">
        <a href="#top" class="el-icon">
            <ArrowUp />
        </a>
    </div>
    </div>
    
</template>

<script setup>
import { ArrowUp, ChatLineSquare, Close } from "@element-plus/icons-vue";
// import { ElButton } from "element-plus";
import { ref, onMounted } from "vue";

const isScrolled = ref(false);
const showTip=ref(false);

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

.tip {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -6%;
    right: 180%;
    width: 300px;
    height: auto;
    color: rgb(0, 0, 0);
    background-color: rgb(247, 245, 245);
    padding: 15px; 
    border-radius: 12px; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
}

.tip .el-icon {
    left: 240px;
    color: #666; 
    cursor: pointer; 
}

.feedback {
    font-weight: bold;
    padding-bottom: 15px;
}
</style>
