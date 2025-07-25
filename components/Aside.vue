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
    
    <div 
      class="top" 
      :class="{ 'top-hidden': !isScrolled }"
      @click.prevent="scrollToTop"
    >
      <div class="el-icon">
        <ArrowUp />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUp, Edit } from "@element-plus/icons-vue";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

// 监听滚动事件
const handleScroll = () => {
  // 滚动超过50px时显示回到顶部按钮
  isScrolled.value = window.scrollY > 50;
};

// 平滑滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 初始化状态
  handleScroll();
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.okkk {
  width: 20px;
  height: 20px;
}
.aside {
  z-index: 1002;
  position: fixed;
  right: 50px;
  bottom: 100px;
}

.check,
.top {
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.check {
  margin-bottom: 10px;
}

/* 悬停效果 */
.check:hover,
.top:hover {
  background-color: #f5f5f5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.el-icon {
  color: #333333;
  font-size: 26px;
  padding: 11px;
  transition: color 0.3s ease;
  width: 20px;
  height: 20px;
}

.check:hover .el-icon,
.top:hover .el-icon {
  color: #f0b31c;
}

/* 回到顶部按钮显示/隐藏控制 */
.top-hidden {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

/* 提示框样式 */
.tip {
  position: absolute;
  right: 120%;
  top: 50%;
  transform: translateY(-50%);
  width: 290px;
  padding: 12px 15px;
  background-color: #f7f5f5;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none; /* 避免干扰点击 */
  z-index: 1003;
}

/* 提示框箭头 */
.tip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent transparent #f7f5f5;
}

.check:hover .tip {
  opacity: 1;
  visibility: visible;
  right: calc(100% + 10px);
}

.feedback {
  font-weight: 500;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .aside {
    right: 20px;
    bottom: 20px;
  }
  
  .check, .top {
    width: 50px;
    height: 50px;
  }
  
  .el-icon {
    font-size: 24px;
  }
  
  .tip {
    display: none !important;
  }
}

@media (max-width: 480px) {
  .aside {
    right: 15px;
    bottom: 15px;
  }
  
  .check, .top {
    width: 45px;
    height: 45px;
  }
  
  .el-icon {
    font-size: 22px;
  }
}
</style>

