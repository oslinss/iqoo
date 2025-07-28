<template>
  <div class="product-content">
    <div class="product-detail">
      <img
        src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20241030/af78e4b31adbc7d26955e4465aa636b7.jpg"
        alt="iQOO Neo10 Pro+ 手机展示图"
        class="product-image"
      />
      <div class="keyword">
        <a
          href="https://www.vivo.com.cn/vivo/iqooneo10proplus/"
          class="top-product-link"
        >
          <h1>
            <img
              class="no-flip-over"
              src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20241030/3a32c89f5e2a5119f7d0d2a355f241ee.svg"
              alt="iQOO 13"
            />
          </h1>
          <p class="product-tagline">首批搭载骁龙8至尊版</p>
        </a>
        <div class="buy">
          <a href="https://shop.vivo.com.cn/product/10010935" class="action-btn"
            >立即购买
            <el-icon class="el-icon"><ArrowRight /></el-icon>
          </a>
          <a
            href="https://www.vivo.com.cn/vivo/iqooneo10proplus/"
            class="action-btn"
            >了解更多
            <el-icon class="el-icon"><ArrowRight /></el-icon>
          </a>
        </div>
      </div>
    </div>
    
    <div class="product-list">
      <div
        class="product-item"
        :class="item.name.replace(/\s+/g, '-')"
        v-for="(item, index) in ProductData.data"
        :key="'initial-' + index"
      >
        <div>
          <img class="product-thumb" :src="item.image" />
        </div>
        <div class="item-color">
          <span style="background: #f2f2f2"></span>
          <span style="background: #262626"></span>
          <span style="background: #ad4144"></span>
        </div>
        <div class="item-message">
          <div class="item-name">{{ item.name }}
            <span>缺货</span>
          </div>
          <p class="item-description">{{ item.description }}</p>
          <div class="link">
            <div class="detail">
              <a :href="item.detailUrl" class="detail-link"
                >详情
                <el-icon><ArrowRight /></el-icon>
              </a>
            </div>
            <div class="shop">
              <a :href="item.buyUrl" class="shop-link"
                >购买
                <el-icon><ArrowRight /></el-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <template v-if="showMore">
        <div
          class="product-item"
          :class="item.name.replace(/\s+/g, '-')"
          v-for="(item, index) in MoreData.data"
          :key="'more-' + index"
        >
          <div>
            <img class="product-thumb" :src="item.image" />
          </div>
          <div class="item-color">
            <span style="background: #f2f2f2"></span>
            <span style="background: #262626"></span>
            <span style="background: #ad4144"></span>
          </div>
          <div class="item-message">
            <span class="item-name">{{ item.name }}</span>
            <p class="item-description">{{ item.description }}</p>
            <div class="link">
              <div class="detail">
                <a :href="item.detailUrl" class="detail-link"
                  >详情
                  <el-icon><ArrowRight /></el-icon>
                </a>
              </div>
              <div class="shop">
                <a :href="item.buyUrl" class="shop-link"
                  >购买
                  <el-icon><ArrowRight /></el-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    

    <div class="load-more-tab" v-if="!showMore">
      <div class="load-more" @click="showMore = true">
        加载更多
        <el-icon><ArrowDown /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight, ArrowDown } from "@element-plus/icons-vue";
import ProductData from '../src/assets/data/ProductData.json';
import MoreData from '../src/assets/data/MoreData.json';
import { ref }  from "vue";

const showMore = ref(false);
</script>

<style scoped>
.product-content {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;
  background-color: #edeff2;
}
.product-detail {
  position: relative;
  width: 90%;
  height: 80vh;
  margin: 50px auto;
  border: 2px solid #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0);
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
}

.keyword {
  position: absolute;
  text-align: left;
  z-index: 10;
  top: 20%;
  left: 10%;
}

.top-product-link {
  text-decoration: none;
  color: #000;
  display: block;
}

.no-flip-over {
  max-width: 500px;
  margin: 0 auto 15px;
  display: block;
  height: auto;
}

.product-tagline {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: 500;
}

.buy {
  line-height: 80px;
  margin: 1vw 0 2vw 0;
  padding: 0;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.buy a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding-right: 30px;
}

.buy a:hover {
  color: #415fff;
  transition: transform 0.3s ease;
  transform: scale(1.05, 0.95);
}

.action-btn {
  display: inline-block;
  align-items: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.action-btn:hover {
  transform: scale(1.05, 0.95);
}

.action-btn .el-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-left: 10px;
  border: #000000 3px solid;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 16px;
  padding: 5px 15px;
}

.action-btn:hover .el-icon {
  transform: translateX(5px) scale(1.3);
}

.action-btn:hover .el-icon :deep(svg) {
  opacity: 0;
  transform: scale(0);
}

.action-btn .el-icon::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: #415fff;
  border-radius: 50%;
  transform: scale(0) translateX(0);
  opacity: 0;
  transition: all 0.3s ease;
  right: 6px;
}

.action-btn:hover .el-icon::after {
  transform: scale(1) translateX(0);
  opacity: 1;
}

.action-btn:hover .el-icon {
  color: #415fff;
  border-color: #415fff;
}


.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 90%;
  margin: 0 auto;
}

.product-item {
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 15px;
  transition: all 0.3s;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.product-thumb {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.item-color {
  display: flex;
  gap: 8px;
  margin: 10px 0;
  justify-content: center;
}

.item-color span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #ddd;
}

.item-message {
  padding: 10px 0;
}

.item-name {
  font-weight: 500;
  font-size: 1.7rem;
}

.item-name span {
  color: #575c66;
  font-size: 0.5rem;
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 2px 6px;
  border: 1px solid #575c66;
  border-radius: 12px;
}

.item-description {
  margin: 8px 0;
  min-height: 40px;
  font-size: 16px;
  font-weight: 500;
}

.link {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.link .detail,
.link .shop {
  font-size: 14px;
  font-weight: 500;
}

.link a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding-bottom: 5px;
}

.link .el-icon {
  align-items: center;
  margin-right: 12px;
  transition: transform 0.3s ease;
  font-size: 12px;
}

.load-more-tab {
  margin: 50px 0;
}

.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a8f99;
  font-size: 22px;
  line-height: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px 0;
}

.load-more:hover {
  color: #415fff;
  transform: translateY(3px);
}

.load-more .el-icon {
  margin-left: 10px;
  transition: transform 0.3s ease;
  font-size: 26px;
}

.load-more:hover .el-icon {
  transform: translateY(3px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .keyword {
    top: 15%;
    left: 5%;
  }

  .no-flip-over {
    max-width: 220px;
  }

  .product-tagline {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-detail {
    height: 60vh;
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
  }

  .keyword {
    position: relative;
    top: 0;
    left: 0;
    padding: 20px;
    text-align: center;
  }

  .buy {
    display: flex;
    flex-direction: column;
    line-height: normal;
    gap: 15px;
  }

  .action-btn {
    margin-bottom: 10px;
  }
}
</style>