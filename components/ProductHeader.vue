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
              class=""
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
              <a href="https://passport.vivo.com.cn/v3/web/login/authorize?client_id=30&redirect_uri=https%3A%2F%2Fwww.vivo.com.cn%2Fproducts-iqoo.html">
                <el-icon><Upload /></el-icon>
                登录</a>
            </div>
            <div>
              <a href="https://passport.vivo.com.cn/#/register?client_id=30&redirect_uri=https%3A%2F%2Fwww.vivo.com.cn%2Fproducts-iqoo.html">
                <el-icon><UserFilled /></el-icon>
                注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky-header">
      <div class="header-content">
        <div class="logo">ViVO</div>
        <div class="show">
          <div><a href="https://www.vivo.com.cn/products-x.html">X系列</a></div>
          <div><a href="https://www.vivo.com.cn/products-s.html">S系列</a></div>
          <div><a href="https://www.vivo.com.cn/products-y.html">Y系列</a></div>
          <div><a href="https://www.vivo.com.cn/products-iqoo.html">iQOO手机</a></div>
          <div><a href="https://www.vivo.com.cn/products-accessory.htmll">智能硬件</a></div>
          <div><a href="https://shop.vivo.com.cn/">商城</a></div>
          <div><a href="https://www.vivo.com.cn/service.html">服务</a></div>
        </div>
        <div class="search">
          <el-icon @click="showSearch"><Search /></el-icon>
          <div class="search-bar" v-if="showSearch">
            <div>
              <div>
                <input type="text" placeholder="搜索手机、配件、服务等" />
                <el-icon><Search /></el-icon>
              </div>
              <div>
                <el-icon><Close /></el-icon>
              </div>
            </div>
            <!-- <div class="search-history">
              <div></div>
              <div></div>
            </div> -->
            <div class="search-page" v-if="showSearchPage">
      <div class="search-page-header">
        <div class="search-logo">ViVO</div>
        <el-icon class="close-icon" @click="showSearchPage = false"><Close /></el-icon>
      </div>
      
      <div class="search-page-content">
        <div class="search-input-container">
          <el-icon class="search-input-icon"><Search /></el-icon>
          <input 
            type="text" 
            placeholder="" 
            class="search-input"
            v-model="searchKeyword"
            @keyup.enter="handleSearch"
          />
        </div>
        
        <div class="search-hot">
          <h3>热门搜索</h3>
          <div class="hot-tags">
            <span v-for="tag in hotTags" :key="tag" @click="searchKeyword = tag">{{ tag }}</span>
          </div>
        </div>
        
        <div class="search-history" v-if="searchHistory.length > 0">
          <div class="history-header">
            <h3>搜索历史</h3>
            <span class="clear-history" @click="clearHistory">清空历史</span>
          </div>
          <div class="history-tags">
            <span v-for="(item, index) in searchHistory" :key="index" @click="searchKeyword = item">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
      <div class="phone-header">
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
  </div>
</template>

<script setup>
import { Download, Search, Upload, UserFilled } from "@element-plus/icons-vue";
</script>

<style scoped>
.product-header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  width: 0;
  height: 0;
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
  position: relative;
}

.personal-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: -50px;
  margin-top: 20px;
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
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
}

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
  position: sticky;
  top: 0;
  z-index: 1003;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  color: #242933;
}

.logo {
  font-size: 30px;
  font-weight: bolder;
  color: #333;
  transform: scaleX(1.5);
}

.show {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.show a {
  color: #242933;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.search {
  font-weight: bolder;
  transform: scaleX(1.3);
}

.logo:hover,
.show a:hover,
.search:hover {
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

</style>
