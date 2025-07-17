<template>
  <div class="container">
    <img
      src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747725005217/2eef30ff0c024e31cffb4d6a06237ae8.jpg"
      alt="iQOO Neo10 Pro+"
    />
    <div class="keyword">
      <a href="https://www.vivo.com.cn/vivo/iqooneo10proplus/">
        <h1>
          <img
            class="no-flip-over"
            src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747725019644/0ad4f860b6bc60ab5715fd9d5c5d636b.svg"
            alt="iQOO Neo10 Pro+"
          />
        </h1>
        <p>骁龙8至尊，2K Q10 珠峰屏</p>
      </a>

      <span class="buy">
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
      </span>
    </div>
    <div id="scroll" class="scroll-indicator">
      <span> 向下滑动 </span>
      <el-icon class="el-icon"><ArrowDown /></el-icon>
    </div>
  </div>

  <div class="list">
    <img
      src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1746601866775/f61dceebc421efa8b084ae5dbb2f7ba8.jpg"
    />
    <img
      src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747098987981/b61c2e89c52938ec58b825f8524af1b9.jpg"
    />
    <div class="keyword2">
      <a href="https://www.vivo.com.cn/vivo/iqooz10turbopro/">
        <h1>
          <img class="no-flip-over" src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1746601883707/4efa7053bce957083cd3477caa9f0bbc.svg" alt="iQOO Z10 Turbo Pro">
        </h1>
        <p>第四代骁龙8S</p>
      </a>

      <span class="list-buy">
        <a href="https://shop.vivo.com.cn/product/10010935" class="action-btn"
          >立即购买 <el-icon class="el-icon"><ArrowRight /></el-icon
        ></a>
        <a
          href="https://www.vivo.com.cn/vivo/iqooz10turbopro/"
          class="action-btn"
          >了解更多 <el-icon class="el-icon"><ArrowRight /></el-icon
        ></a>
      </span>
    </div>
    <div class="keyword3">
      <a href="https://www.vivo.com.cn/vivo/iqoopad5/">
        <h1>
          <img class="no-flip-over" src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747099000683/fcd87ecdddefdae7b480774b86fc6deb.svg" alt="iQOO Pad5">
        </h1>
        <p>12.1英寸高亮电竞屏</p>
      </a>
      <span class="list-buy">
        <a href="https://shop.vivo.com.cn/product/10010935" class="action-btn"
          >立即购买
          <el-icon class="el-icon"><ArrowRight /></el-icon>
        </a>
        <a href="https://www.vivo.com.cn/vivo/iqoopad5/" class="action-btn"
          >了解更多 <el-icon class="el-icon"><ArrowRight /></el-icon
        ></a>
      </span>
    </div>
  </div>

  <div class="discovery-tab">
    <h1>发现</h1>
    <div class="discovery">
      <div class="discovery-item break-inside-avoid">
        <div>
          <img
          src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1746601061915/cd658e81e2b37b3d604a84956f44f3c8.jpg"
        />
        <div class="keyword4">
          <h2>iQOO Neo10</h2>
          <p>第三代骁龙8</p>
        </div>
        </div>
        
        <div>
          <img
            src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747100628566/a8a98c69036f65684400af27789b0ce9.jpg"
            alt=""
          />
          <div class="keyword5">
            <h2>iQOO Z9 Turbo 长续航版</h2>
            <p>第三代骁龙8s</p>
          </div>
        </div>
      </div>
      <div class="discovery-item break-inside-avoid">
        <img
          src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747117528912/0e9337b9de293bdb8883e77ea11c32d3.jpg"
          alt=""
        />
        <div class="keyword6">
          <h2>iQOO WATCH 5</h2>
          <p>22天蓝牙续航</p>
        </div>
      </div>

      <div class="discovery-item break-inside-avoid">
        <div>
          <img
            src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1740648712335/fc0a8f5038c70730ef23765cd92ec434.jpg"
            alt=""
          />
          <div class="keyword7">
            <h2>iQOO 13</h2>
            <P>首批搭载骁龙8至尊版</P>
          </div>
        </div>
        
        <div>
          
        </div>

        <img
          src="https://cn-exstatic-vivofs.iqoo.com/Br81IMbjh1IEtVmx/1747099702786/bb03ed0fbd8e5c941408f5ea8b4eb16f.jpg"
          alt=""
        />
        <div class="keyword8">
          <h2>iQOO TWS Air3</h2>
          <p>45小时超长续航</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const scrollIndicator = document.getElementById("scroll");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollIndicator.style.display = "none";
    } else {
      scrollIndicator.style.display = "block";
    }
  });
});

import { ArrowDown, ArrowRight } from "@element-plus/icons-vue";
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container a {
  text-decoration: none;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  /* font-weight: bold;
  font-size: 24px; */
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
}
.scroll-indicator span {
  margin-right: 10px;
  font: 24px bolder;
  margin-left: 10px;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px auto;
  padding: 0 10%;
  max-width: 80%;
  border-radius: 10px;
}

.list img {
  margin: 15px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(177, 159, 159, 0.1);
  position: relative;
}

.list img:hover,
.discovery-item img:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.list a {
  text-decoration: none;
  color: #000;
}

img {
  width: 100%;
}

.no-flip-over {
  width: 100px;
}

.buy a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
  font-size: 20px;
  padding-bottom: 10px;
}

.buy a:hover {
  color: #f0b31c;
  transition: transform 0.3s ease;
  transform: scale(1.05, 0.95);
}

.list-buy a {
  margin-right: 25px;
}

.list-buy a:hover,
.list-buy:hover {
  color: #f0b31c;
  transition: transform 0.3s ease;
  transform: scale(1.05, 0.95);
}

.discovery h2 {
  font-size: 14px;
}

.discovery p {
  font-size: 20px;
  font-weight: bolder;
}

.keyword {
  position: absolute;
  top: 30%;
  left: 8%;
  width: 500px;
}

.keyword2 {
  position: absolute;
  top: 130%;
  left: 18%;
}

.keyword3 {
  position: absolute;
  top: 210%;
  left: 20%;
}

.keyword h1 {
  font-size: 50px;
  color: white;
  margin-bottom: -30px;
}
.keyword p {
  font-size: 30px;
  color: white;
  margin-bottom: 50px;
}

.keyword2 .el-icon {
  color: rgb(0, 0, 0);
  font-size: 12px;
  margin-left: 10px;
  border: #000 3px solid;
}

.keyword2 h1 {
  width: 400px;
  margin-left: -10px;
}

.keyword2 h1 img {
  width: 100%;
  height: 50px;
}

.keyword2 p {
  font: 24px bolder;
  margin-top: -45px;
}

.keyword2 a {
  font-size: 18px;
  color: black;
}

.keyword3 p {
  margin-top: -30px;
}

.list-buy {
  display: flex;
  padding-top: 30px;
}

.keyword3 a {
  font-size: 24px;
  color: white;
}

.keyword3 h1{
  font-size: 50px;
  color: white;
  margin-left: -110px;
}

.keyword3 h1 img {
  width: 100%;
  height: 30px;
}

.keyword3 span a {
  font-size: 18px;
}

.keyword3 .el-icon {
  color: rgb(254, 254, 254);
  font: 12px bolder;
  margin-left: 10px;
}

.keyword6,
.keyword8 {
  position: absolute;
  left: 16px;
  bottom: 56px;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  max-width: 80%;
  z-index: 2;
  /* 可根据需要调整字体大小 */
}

.keyword4 {
  position: absolute;
  left: 16px;
  bottom: 360px;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  max-width: 80%;
  z-index: 2;
  /* 可根据需要调整字体大小 */
}

.discovery-item h2,
.discovery-item p {
  color: white;
  margin: 0;
  padding: 0;
}

.keyword5,
.keyword7 {
  margin-left: 15px;
}

.keyword7 p,
.keyword5 p {
  font-size: 20px;
  font-weight: bolder;
  color: #000;
}
.keyword5 h2,
.keyword7 h2 {
  font-size: 14px;
  color: rgb(0, 0, 0);
}

.discovery-tab h1 {
  padding: 0 6%;
  font-size: 40px;
}

.discovery {
  column-count: 3;
  margin-bottom: 100px;
  padding: 0 5%;
  column-gap: 20px;
}

.discovery-item {
  break-inside: avoid;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s ease;
  position: relative;
  padding: 15px;
}

.discovery img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: block;
}

.break-inside-avoid {
  break-inside: avoid;
}

/* 响应式设计 */
/* 平板设备 (768px - 1023px) */
@media (max-width: 1023px) {
  .discovery {
    grid-template-columns: repeat(2, 1fr);
  }

  .keyword h1 {
    font-size: 36px;
  }

  .keyword p {
    font-size: 22px;
  }

  .keyword2 h1,
  .keyword3 h1 {
    font-size: 26px;
  }

  .keyword2 p,
  .keyword3 p {
    font-size: 18px;
  }

  .action-btn {
    padding: 12px 24px;
    font-size: 15px;
  }

  .discovery-tab h1 {
    font-size: 36px;
  }
}

/* 移动设备 (最大767px) */
@media (max-width: 767px) {
  .container {
    height: 90vh;
  }

  .keyword {
    top: 50%;
    left: 5%;
    width: 90%;
    padding: 15px;
    transform: translateY(-50%);
  }

  .keyword h1 {
    font-size: 28px;
  }

  .keyword p {
    font-size: 18px;
    margin: 10px 0 15px;
  }

  .buy {
    margin-top: 15px;
  }

  .action-btn {
    padding: 10px 20px;
    font-size: 14px;
  }

  .scroll-indicator {
    font-size: 14px;
    bottom: 20px;
  }

  .list {
    margin: 40px auto;
    gap: 30px;
  }

  .keyword2,
  .keyword3 {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    margin-top: -70px;
    margin-bottom: 20px;
    padding: 15px;
  }

  .keyword2 {
    background: rgba(255, 255, 255, 0.9);
  }

  .keyword3 {
    background: rgba(0, 0, 0, 0.6);
  }

  .keyword2 h1,
  .keyword3 h1 {
    font-size: 24px;
  }

  .keyword2 p,
  .keyword3 p {
    font-size: 16px;
  }

  .discovery {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  .discovery-tab h1 {
    font-size: 32px;
    margin: 40px 0 20px;
  }

  .no-flip-over {
    width: 180px;
  }

  .discovery-item {
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .footer-links {
    gap: 15px;
  }
}

/* 小屏幕移动设备 (最大480px) */
@media (max-width: 480px) {
  .keyword h1 {
    font-size: 24px;
  }

  .keyword p {
    font-size: 16px;
  }

  .buy {
    flex-direction: column;
    gap: 10px;
  }

  .action-btn {
    width: 100%;
    justify-content: center;
  }

  .discovery-tab h1 {
    font-size: 28px;
  }

  .no-flip-over {
    width: 150px;
  }

  .keyword2,
  .keyword3 {
    margin-top: -50px;
  }
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin: 60px 0 30px;
  color: #222;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: #f0b31c;
  margin: 15px auto;
  border-radius: 2px;
}
.el-icon {
  margin-left: 5px;
  color: white;
  font: 14px bolder;
  border: #fff 3px solid;
  border-radius: 16px;
  padding: 5px 15px;
}

.el-icon:hover {
  color: #f0b31c;
  transition: transform 0.3s ease;
  transform: scale(1.05, 0.95);
  border: #f0b31c 3px solid;
  font-size: 20px;
}
</style>
