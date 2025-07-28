<template>
  <div class="product-header">
    <div class="nav">
      <div class="nav-left">
        <a href="https://www.vivo.com.cn/brand/home">品牌</a>
        <a href="https://www.vivo.com.cn/originos">OriginOS</a>
        <a href="https://www.vivo.com.cn/store">体验店</a>
        <a href="https://bbs.vivo.com.cn/newbbs/">官方社区</a>
      </div>
      <div class="nav-right">
        <div class="download-container">
          <a href="" class="download-app">
            <el-icon><Download /></el-icon>
            下载APP
          </a>
          <div class="download-code">
            <img
              src="https://wwwstatic.vivo.com.cn/vivoportal/files/resource/files/1695178441055/5DsI1k7YlPy53.png"
            />
            <span>扫描下载 vivo官方APP</span>
          </div>
        </div>
        <div>
          <a href="">购物车</a>
        </div>
        <div class="personal-center">
          <a href="" class="personal-link">个人中心</a>
          <div class="personal-dropdown">
            <div>
              <a
                href="https://passport.vivo.com.cn/v3/web/login/authorize?client_id=30&redirect_uri=https%3A%2F%2Fwww.vivo.com.cn%2Fproducts-iqoo.html"
              >
                <el-icon><Upload /></el-icon>
                登录</a
              >
            </div>
            <div>
              <a
                href="https://passport.vivo.com.cn/#/register?client_id=30&redirect_uri=https%3A%2F%2Fwww.vivo.com.cn%2Fproducts-iqoo.html"
              >
                <el-icon><UserFilled /></el-icon>
                注册</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sticky-header"
      ref="stickyHeaderRef"
      :class="{ hidden: showMark }"
    >
      <div class="header-content">
        <div class="logo">ViVO</div>
        <div class="show original-show">
          <div>
            <a
              href="https://www.vivo.com.cn/products-x.html"
              class="series-link"
              data-series="x"
              @mouseenter="handleSeriesEnter"
              @mouseleave="handleSeriesLeave"
              >X系列</a
            >
          </div>
          <div>
            <a
              href="https://www.vivo.com.cn/products-s.html"
              class="series-link"
              data-series="s"
              @mouseenter="handleSeriesEnter"
              @mouseleave="handleSeriesLeave"
              >S系列</a
            >
          </div>
          <div>
            <a
              href="https://www.vivo.com.cn/products-y.html"
              class="series-link"
              data-series="y"
              @mouseenter="handleSeriesEnter"
              @mouseleave="handleSeriesLeave"
              >Y系列</a
            >
          </div>
          <div>
            <a
              href="https://www.vivo.com.cn/products-iqoo.html"
              class="series-link"
              data-series="iqoo"
              @mouseenter="handleSeriesEnter"
              @mouseleave="handleSeriesLeave"
              >iQOO手机</a
            >
          </div>
          <div>
            <a
              href="https://www.vivo.com.cn/products-accessory.html"
              class="series-link"
              data-series="accessory"
              @mouseenter="handleSeriesEnter"
              @mouseleave="handleSeriesLeave"
              >智能硬件</a
            >
          </div>

          <div><a href="https://shop.vivo.com.cn/">商城</a></div>
          <div><a href="https://www.vivo.com.cn/service.html">服务</a></div>
        </div>

        <el-icon
          class="search-icon"
          @click="toggleSearch"
          :class="{ moved: showSearch }"
          ><Search />
        </el-icon>
      </div>

      <div class="phone-header original-phone">
        <div>
          <img
            src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20241030/c4d0da49fe876d69281c5cd769b2dddb.png"
            alt=""
          />
          <p>iQOO旗舰系列</p>
        </div>
        <div>
          <img
            src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20250519/8a0177a5d8af23519aab4e21a0541f63.png"
            alt=""
          />
          <p>iQOO Neo系列</p>
        </div>
        <div>
          <img
            src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20250427/0993ba509f67d4ff5818c84c55ddcecc.png"
            alt=""
          />
          <p>iQOO Z系列</p>
        </div>
      </div>
    </div>

    <div
      class="search-overlay"
      :class="{ active: showSearch }"
      v-if="showSearch"
    >
      <div class="search-overlay-content">
        <div class="search-overlay-header">
          <div class="logo">vivo</div>
          <div class="search-input-container">
              <input
              type="text"
              v-model="searchKeyword"
              placeholder="iQOO"
              @keyup.enter="handleSearch"
              autofocus
            />
            <el-icon class="search-icon-overlay"><Search /></el-icon>
          </div>
          <el-icon class="close-icon" @click="closeSearch">
            <Close />
          </el-icon>
        </div>
        <div class="search-suggestions">
          <div class="section hot-searches">
            <h3>大家都在搜</h3>
            <div class="tags">
              <span
                v-for="(tag, index) in hotTags"
                :key="index"
                @click="searchKeyword = tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="section search-history" v-if="searchHistory.length">
            <div class="history-header">
              <h3>搜索历史</h3>
              <button class="clear-history" @click="clearHistory">
                清除历史
              </button>
            </div>
            <div class="tags">
              <span
                v-for="(item, index) in searchHistory"
                :key="index"
                @click="searchKeyword = item"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mark"
      :class="{ 'mark-visible': showMark && !showSearch }"
      @mouseenter="handleMarkEnter"
      @mouseleave="handleMarkLeave"
    >
      <div class="header-content mark-header">
        <div class="logo">ViVO</div>
        <div class="mark-series">
          <div><a href="https://www.vivo.com.cn/products-x.html">X系列</a></div>
          <div><a href="https://www.vivo.com.cn/products-s.html">S系列</a></div>
          <div><a href="https://www.vivo.com.cn/products-y.html">Y系列</a></div>
          <div>
            <a href="https://www.vivo.com.cn/products-iqoo.html">iQOO手机</a>
          </div>
          <div>
            <a href="https://www.vivo.com.cn/products-accessory.html"
              >智能硬件</a
            >
          </div>
          <div><a href="https://shop.vivo.com.cn/">商城</a></div>
          <div><a href="https://www.vivo.com.cn/service.html">服务</a></div>
        </div>
        <div class="search mark-search" @click="toggleSearch">
          <el-icon><Search /></el-icon>
        </div>
      </div>
      <div class="show mark-show">
        <div v-if="activeSeries === 'x'" class="x-series-dropdown">
          <div class="dropdown-content">
            <div class="series-list">
              <div
                class="series-item"
                v-for="(item, index) in XData?.data || []"
                :key="index"
              >
                <div class="image-container">
                  <img :src="item.image" :alt="item.name" loading="lazy" />
                </div>
                <div class="product-info">
                  <span class="product-name">{{ item.name }}</span>
                  <span v-if="item.label" class="product-label">{{
                    item.label
                  }}</span>
                </div>
              </div>
            </div>

            <div class="series-actions">
              <button
                class="scroll-btn left-btn"
                @click="scrollLeft"
                :disabled="scrollPosition <= 0"
              >
                <el-icon><ArrowLeft /></el-icon>
              </button>
              <div class="series-detail">
                <div class="all">
                  <el-icon><MoreFilled /></el-icon>
                  全部机型
                </div>
                <div class="compare">
                  <el-icon><CopyDocument /></el-icon>
                  比较机型
                </div>
              </div>
              <button
                class="scroll-btn right-btn"
                @click="scrollRight"
                :disabled="scrollPosition >= maxScrollPosition"
              >
                <el-icon><ArrowRight /></el-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="show mark-show">
        <div v-if="activeSeries === 's'" class="x-series-dropdown">
          <div class="dropdown-content">
            <div class="series-list">
              <div
                class="series-item"
                v-for="(item, index) in SData?.data || []"
                :key="index"
              >
                <div class="image-container">
                  <img :src="item.image" :alt="item.name" loading="lazy" />
                </div>
                <div class="product-info">
                  <span class="product-name">{{ item.name }}</span>
                  <span v-if="item.label" class="product-label">{{
                    item.label
                  }}</span>
                </div>
              </div>
            </div>

            <div class="series-actions">
              <button
                class="scroll-btn left-btn"
                @click="scrollLeft"
                :disabled="scrollPosition <= 0"
              >
                <el-icon><ArrowLeft /></el-icon>
              </button>
              <div class="series-detail">
                <div class="all">
                  <el-icon><MoreFilled /></el-icon>
                  全部机型
                </div>
                <div class="compare">
                  <el-icon><CopyDocument /></el-icon>
                  比较机型
                </div>
              </div>
              <button
                class="scroll-btn right-btn"
                @click="scrollRight"
                :disabled="scrollPosition >= maxScrollPosition"
              >
                <el-icon><ArrowRight /></el-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import {
  Download,
  Search,
  Upload,
  UserFilled,
  CopyDocument,
  MoreFilled,
  Close,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";
import XData from "../src/assets/data/XData.json";
import SData from "../src/assets/data/SData.json";

// 控制.mark显示
const showMark = ref(false);
const activeSeries = ref("");
let hideTimer = null;
const stickyHeaderRef = ref(null);

// 搜索相关状态
const showSearch = ref(false);
const searchKeyword = ref("");
const hotTags = ref(["iQOO 12", "X100", "OriginOS 4", "服务中心"]);
const searchHistory = ref([]);

// 搜索区控制
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  // 当关闭搜索时恢复其他导航元素的交互
  if (!showSearch.value) {
    document.body.style.overflow = "";
  } else {
    // 打开搜索时禁用页面滚动
    document.body.style.overflow = "hidden";
  }
};

const closeSearch = () => {
  showSearch.value = false;
  searchKeyword.value = "";
  document.body.style.overflow = "";
};

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    if (!searchHistory.value.includes(searchKeyword.value)) {
      searchHistory.value.unshift(searchKeyword.value);
      if (searchHistory.value.length > 10) searchHistory.value.pop();
    }
    // 这里可以添加实际的搜索逻辑，比如跳转到搜索结果页
    console.log("搜索内容:", searchKeyword.value);
    closeSearch();
  }
};

const clearHistory = () => (searchHistory.value = []);

// 系列导航交互
const handleSeriesEnter = (e) => {
  // 当搜索框显示时，不显示系列导航
  if (showSearch.value) return;

  clearTimeout(hideTimer);
  const series = e.currentTarget.dataset.series;
  if (series) {
    activeSeries.value = series;
    showMark.value = true;
  }
};

const handleSeriesLeave = () => {
  hideTimer = setTimeout(() => {
    if (!document.querySelector(".mark:hover")) {
      showMark.value = false;
      activeSeries.value = "";
    }
  }, 200);
};

const handleMarkEnter = () => {
  clearTimeout(hideTimer);
  showMark.value = true;
};

const handleMarkLeave = () => {
  hideTimer = setTimeout(() => {
    showMark.value = false;
    activeSeries.value = "";
  }, 200);
};

// 点击外部关闭搜索框
onMounted(() => {
  const handleClickOutside = (e) => {
    if (
      showSearch.value &&
      !e.target.closest(".search-overlay") &&
      !e.target.closest(".search-icon")
    ) {
      closeSearch();
    }
  };
  document.addEventListener("click", handleClickOutside);

  const handleStickyLeave = (e) => {
    const isSeriesLink = e.relatedTarget?.classList?.contains("series-link");
    const isMark = e.relatedTarget?.closest(".mark");
    if (!isSeriesLink && !isMark) {
      showMark.value = false;
      activeSeries.value = "";
    }
  };

  stickyHeaderRef.value?.addEventListener("mouseleave", handleStickyLeave);

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
    stickyHeaderRef.value?.removeEventListener("mouseleave", handleStickyLeave);
  });
});

// 滚动控制
const scrollPosition = ref(0);
const itemsPerView = ref(6);
const itemWidth = 140;

const maxScrollPosition = computed(() => {
  const totalItems = XData?.data?.length || 0;
  return Math.max(0, totalItems - itemsPerView.value);
});

const scrollLeft = () => {
  if (scrollPosition.value > 0) {
    scrollPosition.value--;
  }
};

const scrollRight = () => {
  if (scrollPosition.value < maxScrollPosition.value) {
    scrollPosition.value++;
  }
};
</script>

<style scoped>
.product-header {
  width: 100%;
  background-color: #edeff2;
  position: sticky;
  top: -45px;
  z-index: 1005;
  overflow: visible;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: #242933;
  border-top-left-radius: 16px;
}

.nav-left {
  display: flex;
  gap: 20px;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav a {
  margin-right: 20px;
  color: #8a8f99;
  font-size: 12px;
  text-decoration: none;
}

.nav a:hover {
  color: #fff;
}

.download-container {
  position: relative;
  z-index: 1006;
}

.download-app {
  position: relative;
  padding: 0 15px;
  border-right: 2px solid #8a8f99;
}

.download-code {
  display: none;
  position: absolute;
  top: 100%;
  right: -15px;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 15px;
  border-radius: 8px;
  width: 160px;
  z-index: 1004;
}

.download-code::before {
  content: "";
  position: absolute;
  top: -8px;
  right: 80px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
}

.download-app:hover + .download-code,
.download-code:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-code img {
  width: 130px;
  height: 130px;
  object-fit: contain;
  margin-bottom: 10px;
}

.download-code span {
  color: #333;
  font-size: 12px;
  text-align: center;
  line-height: 1.4;
}

.personal-center {
  display: inline-block;
  position: relative;
  z-index: 1006;
}

.personal-dropdown {
  display: none;
  position: absolute;
  top: 143%;
  right: -40px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 8px;
  width: 160px;
  z-index: 1004;
}

.personal-dropdown div {
  text-align: center;
  margin: 5px 0;
  width: 100%;
}

.personal-dropdown div:first-child {
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
}

.personal-dropdown a {
  display: block;
  color: #242933;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.personal-dropdown::before {
  content: "";
  position: absolute;
  top: -8px;
  right: 80px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
}

.personal-center:hover .personal-dropdown,
.personal-link:hover + .personal-dropdown,
.personal-dropdown:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-dropdown a:hover {
  color: #415fff;
}

.sticky-header {
  position: relative;
  background-color: #edeff2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.021);
  min-height: 120px;
  transition: all 0.3s ease;
}

.header-content,
.mark-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  color: #242933;
}

.logo,
.mark-header .logo {
  font-size: 30px;
  font-weight: bolder;
  color: #333;
  transform: scaleX(1.5);
}

.show,
.mark-series {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.show a,
.mark-series a {
  color: #242933;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.series-link {
  position: relative;
  padding: 5px 0;
}

.search-icon {
  position: relative;
  font-size: 20px;
  color: #242933;
  cursor: pointer;
  transform: scaleX(1.3);
  transition: transform 0.3s ease, color 0.3s ease;
  z-index: 1010;
}

.mark-search {
  transform: scaleX(1.3);
}

.search-icon:hover {
  color: #415fff;
}

.logo:hover,
.show a:hover,
.mark-header .logo:hover,
.mark-series a:hover,
.mark-search:hover {
  color: #415fff;
}

.phone-header {
  display: flex;
  width: 30%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 10px;
}

.phone-header div {
  width: 90px;
  text-align: center;
}

.phone-header div:hover {
  border-bottom: 5px solid #000000;
}

.phone-header img {
  width: 60%;
  height: auto;
}
.phone-header p {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #000000;
}

.mark {
  position: absolute;
  top: 19%;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 1010;
  min-height: 120px;
  padding: 10px 0;
  box-sizing: border-box;
  transition: top 0.3s ease-out, opacity 0.3s ease, visibility 0.3s ease;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mark.mark-visible {
  top: 45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.x-series-dropdown {
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.series-list {
  display: flex;
  justify-content: center;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.series-list::-webkit-scrollbar {
  display: none;
}

.series-item {
  min-width: 120px;
  width: auto;
  text-align: center;
  transition: transform 0.2s;
  padding: 0 10px;
}

.series-item:hover {
  transform: translateY(-5px);
}

.image-container {
  overflow: hidden;
  border: 1px solid #eee;
  border-radius: 8px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
  margin: 10px;
  min-height: 60px;
}

.series-actions {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
}

.scroll-btn {
  background-color: #f7f8fa;
  border: 1px solid #f7f8fa;
  border-radius: 12px;
}

.scroll-btn .el-icon {
  color: #000000;
  font-size: 14px;
  margin: 5px 15px;
}

.series-detail {
  display: flex;
  justify-content: center;
  background-color: #f1f8fa;
  border: #f7f8fa 1px solid;
  border-radius: 12px;
  padding: 5px 10px;
  color: #242933;
  font-size: 14px;
  width: 200px;
}

.all {
  padding-right: 20px;
  border-right: #575c66 1px solid;
}

.compare {
  padding-left: 20px;
  display: flex;
  align-items: center;
}

.sticky-header.hidden .original-show,
.sticky-header.hidden .original-phone {
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}

.sticky-header {
  transition: min-height 0.3s ease;
}

.sticky-header.hidden {
  min-height: 0;
  overflow: hidden;
}

.search-overlay {
  position: fixed;
  top: 51px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all 0.3s ease;
  height: 500px;
}

.search-overlay.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.search-overlay-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search-overlay-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 60px;
  border-bottom: 1px solid #eee;
}


.search-input-container {
  position: relative;
  margin-bottom: 60px;
  border: 1px solid #ffffff;
  width: 600px;
}

.search-input-container input {
  width: 100%;
  padding: 20px 20px 20px 60px;
  font-size: 14px;
  border: none;
  border-bottom: 4px solid #eee;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.search-input-container input:focus {
  border-color: #415fff;
}

.search-icon-overlay {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleX(1.3);
  font-size: 28px;
  color: #999;
}

.close-icon {
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease;
  margin-top: 30px;
}

.close-icon:hover {
  color: #415fff;
}

.search-suggestions {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 488px;
}

.section h3 {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  font-weight: 500;
}

.tags {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tags span {
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tags span:hover {
  background-color: #eee;
  color: #415fff;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clear-history {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.clear-history:hover {
  color: #333;
  background-color: #f5f5f5;
}
</style>
